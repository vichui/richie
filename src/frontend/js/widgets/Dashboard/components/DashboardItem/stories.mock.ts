import { CourseStateFactory } from 'utils/test/factories/richie';
import { Enrollment, EnrollmentState } from 'types/Joanie';

export const enrollment: Enrollment = {
  id: '1',
  state: EnrollmentState.SET,
  is_active: true,
  was_created_by_order: true,
  created_on: '2022-09-09T12:00:00+00:00',
  course_run: {
    id: '1',
    title: '',
    start: '2022-09-09T12:00:00+00:00',
    end: '2022-10-01T13:00:00+00:00',
    enrollment_end: '2022-09-21T20:57:58+00:00',
    enrollment_start: '2022-08-11T20:39:46+00:00',
    resource_link: 'https://lms.fun-mooc.fr/courses/course-v1:supagro+120001+archive_ouvert/info',
    state: CourseStateFactory.generate(),
    course: {
      code: '09391',
      title: 'Learn disruptive technologies',
      products: [],
      course_runs: [],
      organizations: [
        {
          code: '111',
          title: '111',
        },
      ],
    },
  },
};