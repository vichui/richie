import React from 'react';
import { FormattedMessage } from 'react-intl/lib';
import { CourseRun } from 'types';
import useDateFormat from 'hooks/useDateFormat';
import { StringHelper } from 'utils/StringHelper';
import { messages } from 'widgets/SyllabusCourseRunsList/SyllabusSimpleCourseRunsList';

const CourseRunItem = ({ item }: { item: CourseRun }) => {
  const formatDate = useDateFormat();

  return item.title ? (
    <FormattedMessage
      {...messages.courseRunTitleWithDates}
      values={{
        start: item.start ? formatDate(item.start) : '...',
        end: item.end ? formatDate(item.end) : '...',
        title: StringHelper.capitalizeFirst(item.title),
      }}
    />
  ) : (
    <FormattedMessage
      {...messages.courseRunWithDates}
      values={{
        start: item.start ? formatDate(item.start) : '...',
        end: item.end ? formatDate(item.end) : '...',
      }}
    />
  );
};

export default CourseRunItem;
