"""
End-to-end tests for the organization detail view
"""
import re
from unittest import mock

from django.test.utils import override_settings

from cms.api import add_plugin
from cms.test_utils.testcases import CMSTestCase

from richie.apps.core.factories import PageFactory, UserFactory
from richie.apps.courses.cms_plugins import CategoryPlugin, OrganizationPlugin
from richie.apps.courses.factories import (
    CategoryFactory,
    CourseFactory,
    OrganizationFactory,
    PersonFactory,
)


class OrganizationCMSTestCase(CMSTestCase):
    """
    End-to-end test suite to validate the content and Ux of the organization detail view
    """

    def test_templates_organization_detail_cms_published_content(self):
        """
        Validate that the important elements are displayed on a published organization page
        """
        # Categories
        published_category = CategoryFactory(should_publish=True)
        extra_published_category = CategoryFactory(should_publish=True)
        unpublished_category = CategoryFactory(should_publish=True)
        unpublished_category.extended_object.unpublish("en")
        not_published_category = CategoryFactory()

        # Organizations
        organization = OrganizationFactory(
            page_title="La Sorbonne",
            fill_categories=[
                published_category,
                not_published_category,
                unpublished_category,
            ],
        )

        # Courses
        published_course = CourseFactory(
            fill_organizations=[organization], should_publish=True
        )
        extra_published_course = CourseFactory(should_publish=True)
        unpublished_course = CourseFactory(fill_organizations=[organization])
        not_published_course = CourseFactory(fill_organizations=[organization])

        # Republish courses to take into account adding the organization
        published_course.extended_object.publish("en")
        unpublished_course.extended_object.publish("en")
        unpublished_course.extended_object.unpublish("en")

        page = organization.extended_object

        # The page should not be visible before it is published
        url = page.get_absolute_url()
        response = self.client.get(url)
        self.assertEqual(response.status_code, 404)

        # Publish the organization
        page.publish("en")

        # Modify the draft version of the published category
        title_obj = published_category.extended_object.title_set.get(language="en")
        title_obj.title = "modified category"
        title_obj.save()

        # Modify the draft version of the published course
        title_obj = published_course.extended_object.title_set.get(language="en")
        title_obj.title = "modified course"
        title_obj.save()

        # Add a new category to the draft organization page but don't publish the modification
        add_plugin(
            page.placeholders.get(slot="categories"),
            CategoryPlugin,
            "en",
            page=extra_published_category.extended_object,
        )

        # Add a new organization to the draft course page but don't publish the modification
        add_plugin(
            extra_published_course.extended_object.placeholders.get(
                slot="course_organizations"
            ),
            OrganizationPlugin,
            "en",
            page=page,
        )

        # Ensure the published page content is correct
        response = self.client.get(url)
        self.assertContains(
            response, "<title>La Sorbonne</title>", html=True, status_code=200
        )
        self.assertContains(
            response,
            '<h1 class="organization-detail__title">La Sorbonne</h1>',
            html=True,
        )

        # Published category should not be on the page since we only display
        # them in draft mode
        self.assertNotContains(
            response,
            (
                '<a class="category-tag" href="{:s}">'
                '<span class="category-tag__title">{:s}</span></a>'
            ).format(
                published_category.public_extension.extended_object.get_absolute_url(),
                published_category.public_extension.extended_object.get_title(),
            ),
            html=True,
        )
        # The other categories should not be leaked:
        # - new_category linked only on the draft organization page
        self.assertNotContains(
            response, extra_published_category.extended_object.get_title()
        )
        # - not published category
        self.assertNotContains(
            response, not_published_category.extended_object.get_title()
        )
        # - unpublished category
        self.assertNotContains(
            response, unpublished_category.extended_object.get_title()
        )

        # The published courses should be on the page in its published version
        self.assertContains(
            response,
            '<p class="course-glimpse__title">{:s}</p>'.format(
                published_course.public_extension.extended_object.get_title()
            ),
            html=True,
        )
        # The other courses should not be leaked:
        # - new course linked only on the draft organization page
        self.assertNotContains(
            response, extra_published_course.extended_object.get_title()
        )
        # - not published course
        self.assertNotContains(
            response, not_published_course.extended_object.get_title()
        )
        # - unpublished course
        self.assertNotContains(response, unpublished_course.extended_object.get_title())

        # Modified draft category and course should not be leaked
        self.assertNotContains(response, "modified")

    @mock.patch(
        "cms.templatetags.cms_tags.PageUrl.get_value", return_value="/the/courses/"
    )
    @override_settings(RICHIE_GLIMPSE_PAGINATION={"courses": 2})
    def test_templates_organization_detail_cms_published_content_max_courses(
        self, _mock_page_url
    ):
        """
        Make sure the organization detail page does not display too many courses, even when a large
        number are related to the current organization, as this can cause the page to load very
        slowly and is not a great experience for the user anyway.
        """
        # Create our dummy organization and the 3 courses we'll attach to it
        organization = OrganizationFactory(should_publish=True)
        courses = CourseFactory.create_batch(
            3, fill_organizations=[organization], should_publish=True
        )
        # Link the 3 courses with our organization through the relevant placeholder
        for course in courses:
            add_plugin(
                course.extended_object.placeholders.get(slot="course_organizations"),
                OrganizationPlugin,
                "en",
                page=organization.extended_object,
            )
        # Make sure we do have 3 courses on the organization
        self.assertEqual(organization.get_courses().count(), 3)

        # Only the first two are rendered in the template
        response = self.client.get(organization.extended_object.get_absolute_url())
        self.assertContains(response, courses[0].extended_object.get_title())
        self.assertContains(response, courses[1].extended_object.get_title())
        self.assertNotContains(response, courses[2].extended_object.get_title())

        # There is a link to view more related courses directly in the Search view
        self.assertContains(
            response, f'href="/the/courses/?organizations={organization.get_es_id():s}"'
        )
        self.assertContains(
            response,
            f"See all courses related to {organization.extended_object.get_title():s}",
        )

    def test_templates_organization_detail_cms_draft_content(self):
        """
        A staff user should see a draft organization including only the related objects that
        are published.
        """
        user = UserFactory(is_staff=True, is_superuser=True)
        self.client.login(username=user.username, password="password")

        published_category = CategoryFactory(should_publish=True)
        not_published_category = CategoryFactory()

        organization = OrganizationFactory(
            page_title="La Sorbonne",
            fill_categories=[published_category, not_published_category],
        )

        published_course = CourseFactory(
            fill_organizations=[organization], should_publish=True
        )
        not_published_course = CourseFactory(fill_organizations=[organization])

        # Republish courses to take into account adding the organization
        published_course.extended_object.publish("en")

        # Modify the draft version of the published category
        title_obj = published_category.extended_object.title_set.get(language="en")
        title_obj.title = "modified category"
        title_obj.save()

        # Modify the draft version of the published course
        title_obj = published_course.extended_object.title_set.get(language="en")
        title_obj.title = "modified course"
        title_obj.save()

        page = organization.extended_object

        # The page should be visible as draft to the staff user
        url = page.get_absolute_url()
        response = self.client.get(url)
        self.assertContains(
            response, "<title>La Sorbonne</title>", html=True, status_code=200
        )
        self.assertContains(
            response,
            '<h1 class="organization-detail__title">La Sorbonne</h1>',
            html=True,
        )

        # The published category should be on the page in its published version
        self.assertContains(
            response,
            (
                '<a class="category-tag" href="{:s}">'
                '<span class="category-tag__title">{:s}</span></a>'
            ).format(
                published_category.public_extension.extended_object.get_absolute_url(),
                published_category.public_extension.extended_object.get_title(),
            ),
            html=True,
        )
        # The not published category should not be on the page
        self.assertNotContains(
            response,
            not_published_category.extended_object.get_title(),
        )
        # The modified draft category should not be leaked
        self.assertNotContains(response, "modified category")

        # The published course should be on the page in its draft version
        self.assertContains(
            response,
            '<p class="course-glimpse__title">modified course</p>',
            html=True,
        )

        # The not published course should not be on the page
        self.assertNotContains(
            response,
            not_published_course.extended_object.get_title(),
        )

    def test_templates_organization_detail_related_persons(self):
        """
        Persons related to an organization via a plugin should appear on the organization
        detail page.
        """
        user = UserFactory(is_staff=True, is_superuser=True)
        self.client.login(username=user.username, password="password")

        organization = OrganizationFactory()
        person = PersonFactory(fill_organizations=[organization])
        page = organization.extended_object

        url = page.get_absolute_url()
        response = self.client.get(url)

        # The person should be present on the page
        pattern = (
            r'<a href="{url:s}">'
            r'<h3 class="person-glimpse__title">'
            r".*{name:s}.*</h3></a>"
        ).format(
            url=person.extended_object.get_absolute_url(),
            name=person.extended_object.get_title(),
        )
        self.assertIsNotNone(re.search(pattern, str(response.content)))

    def test_template_organization_detail_without_organization(self):
        """
        A organization template page without attached organization should show an error banner
        explaining to the user that he/she is misusing the template.
        """
        page = PageFactory(
            template="courses/cms/organization_detail.html",
            title__language="en",
            should_publish=True,
        )

        with self.assertTemplateUsed(
            "courses/cms/fragment_error_detail_template_banner.html"
        ):
            response = self.client.get(page.get_absolute_url())

        self.assertEqual(response.status_code, 200)
        self.assertContains(
            response,
            (
                '<div class="banner banner--error banner--rounded" role="alert">'
                '<svg class="banner__icon"><use href="#icon-cross" /></svg>'
                '<p class="banner__message">'
                "A organization object is missing on this organization page. "
                "Please select another page template."
                "<br />"
                "If what you need is a organization page, you need to create it "
                'via the wizard and choose "New organization page".'
                "</p>"
                "</div>"
            ),
            html=True,
        )
