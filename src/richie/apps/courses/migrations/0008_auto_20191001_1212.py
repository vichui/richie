# Generated by Django 2.1.12 on 2019-10-01 10:12

import django.db.models.deletion
from django.db import migrations, models

import richie.apps.core.models


class Migration(migrations.Migration):

    dependencies = [
        ("cms", "0022_auto_20180620_1551"),
        ("courses", "0007_auto_20190930_2245"),
    ]

    operations = [
        migrations.CreateModel(
            name="OrganizationsByCategoryPluginModel",
            fields=[
                (
                    "cmsplugin_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        related_name="courses_organizationsbycategorypluginmodel",
                        serialize=False,
                        to="cms.CMSPlugin",
                    ),
                ),
                (
                    "variant",
                    models.CharField(
                        blank=True,
                        choices=[(None, "Default")],
                        help_text="Optional glimpse variant for a custom look.",
                        max_length=50,
                        null=True,
                        verbose_name="variant",
                    ),
                ),
                (
                    "page",
                    models.ForeignKey(
                        limit_choices_to={
                            "category__isnull": False,
                            "publisher_is_draft": True,
                        },
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="organizations_by_category_plugins",
                        to="cms.Page",
                    ),
                ),
            ],
            options={
                "verbose_name": "organizations by category plugin",
                "db_table": "richie_organizations_by_category_plugin",
            },
            bases=("cms.cmsplugin",),
        ),
        migrations.AlterField(
            model_name="organizationpluginmodel",
            name="variant",
            field=models.CharField(
                blank=True,
                choices=[(None, "Default")],
                help_text="Optional glimpse variant for a custom look.",
                max_length=50,
                null=True,
                verbose_name="variant",
            ),
        ),
    ]
