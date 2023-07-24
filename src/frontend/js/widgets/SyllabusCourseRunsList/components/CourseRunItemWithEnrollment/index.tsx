import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl/lib';
import { defineMessages } from '@formatjs/intl';
import { CourseRun } from 'types';
import useDateFormat from 'hooks/useDateFormat';
import { StringHelper } from 'utils/StringHelper';
import { messages as sharedMessages } from 'widgets/SyllabusCourseRunsList/SyllabusSimpleCourseRunsList';
import useCourseEnrollment from 'widgets/SyllabusCourseRunsList/hooks/useCourseEnrollment';

const messages = defineMessages({
  goToCourse: {
    defaultMessage: 'Go to course',
    description: 'Link title for users to go to the course run they are enrolled.',
    id: 'components.CourseRunItemWithEnrollment.goToCourse',
  },
  enrolled: {
    defaultMessage: 'You are enrolled in this course run',
    description: 'Help text for users are enrolled to the course run.',
    id: 'components.CourseRunItemWithEnrollment.enrolled',
  },
});

const CourseRunItemWithEnrollment = ({ item }: { item: CourseRun }) => {
  const intl = useIntl();
  const { enrollmentIsActive } = useCourseEnrollment(item.resource_link);

  return (
    <>
      {enrollmentIsActive ? (
        <a href={item.resource_link} title={intl.formatMessage(messages.goToCourse)}>
          <CourseRunLabel courseRun={item} />
        </a>
      ) : (
        <CourseRunLabel courseRun={item} />
      )}
      {enrollmentIsActive && (
        <p className="category-tag" aria-label={intl.formatMessage(messages.enrolled)}>
          Enrolled
        </p>
      )}
    </>
  );
};

const CourseRunLabel = ({ courseRun }: { courseRun: CourseRun }) => {
  const formatDate = useDateFormat();

  return courseRun.title ? (
    <FormattedMessage
      {...sharedMessages.courseRunTitleWithDates}
      values={{
        start: courseRun.start ? formatDate(courseRun.start) : '...',
        end: courseRun.end ? formatDate(courseRun.end) : '...',
        title: StringHelper.capitalizeFirst(courseRun.title),
      }}
    />
  ) : (
    <FormattedMessage
      {...sharedMessages.courseRunWithDates}
      values={{
        start: courseRun.start ? formatDate(courseRun.start) : '...',
        end: courseRun.end ? formatDate(courseRun.end) : '...',
      }}
    />
  );
};

export default CourseRunItemWithEnrollment;
