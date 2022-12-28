import { useIntl } from 'react-intl';
import { useState } from 'react';
import { Priority } from 'types';
import { confirm } from 'utils/indirection/window';
import { resolveAll } from 'utils/resolveAll';
import { CourseRun, Enrollment, Order } from 'types/Joanie';
import { useEnrollments } from 'hooks/useEnrollments';

const messages = {
  firstEnrollCourseConfirmation: {
    id: 'components.DashboardItemEnrollment.firstEnrollCourseConfirmation',
    description:
      'The confirmation message shown to the user when he wants to enroll for the first time ( no existing enrollments )',
    defaultMessage: 'Are you sure that you want to enroll in this session?',
  },
  changeEnrollCourseConfirmation: {
    id: 'components.DashboardItemEnrollment.changeEnrollCourseConfirmation',
    description:
      'The confirmation message shown to the user when he wants to change its enrolled course run',
    defaultMessage: 'Are you sure you want to change your session?',
  },
};

export const useEnroll = (enrollments: Enrollment[], order?: Order) => {
  const enrollmentResources = useEnrollments();
  const [isLoading, setLoading] = useState(false);
  const intl = useIntl();

  const enroll = async (courseRun: CourseRun) => {
    // Do not enroll from existing enrollments if courseRun is not enrollable ( at the moment )
    if (courseRun.state.priority >= Priority.FUTURE_NOT_YET_OPEN) {
      return;
    }

    const activeEnrollments = enrollments.filter(({ is_active }) => is_active);
    const confirmMessage =
      activeEnrollments.length > 0
        ? messages.changeEnrollCourseConfirmation
        : messages.firstEnrollCourseConfirmation;

    if (!confirm(intl.formatMessage(confirmMessage))) {
      return;
    }

    setLoading(true);

    // Unroll from existing active enrollments that belong to this course.
    await resolveAll(activeEnrollments, async (enrollment) => {
      await new Promise((resolve) => {
        enrollmentResources.methods.update(
          {
            course_run: enrollment.course_run.id,
            is_active: false,
            id: enrollment!.id,
            was_created_by_order: enrollment.was_created_by_order,
          },
          {
            onSettled: resolve,
          },
        );
      });
    });

    // Is there an existing enrollment (inactive) for this course run?
    const relatedEnrollment = enrollments.find((enrollment) => {
      return enrollment.course_run.resource_link === courseRun.resource_link;
    });

    const onSettled = () => setLoading(false);

    if (relatedEnrollment) {
      await enrollmentResources.methods.update(
        {
          id: relatedEnrollment.id,
          is_active: true,
          course_run: courseRun.id,
          was_created_by_order: !!order,
        },
        { onSettled },
      );
    } else {
      await enrollmentResources.methods.create(
        {
          is_active: true,
          order: order!.id,
          course_run: courseRun.id,
          was_created_by_order: !!order,
        },
        { onSettled },
      );
    }
  };

  return { enroll, isLoading, error: enrollmentResources.states.error };
};