import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Course, Order, OrderState, Product } from 'types/Joanie';
import {
  OrderFactory,
  ProductFactory,
  QueryStateFactory,
  TargetCourseFactory,
} from 'utils/test/factories';
import { StorybookHelper } from 'utils/StorybookHelper';
import { enrollment } from '../mock.stories';
import { DashboardItemOrder } from './DashboardItemOrder';

const order: Order = { ...OrderFactory.generate(), target_courses: [] };
const product: Product = ProductFactory.generate();
const targetsCourses: Course[] = TargetCourseFactory.generate(3);

export default {
  title: 'Components/Dashboard/Order[Readonly]',
  component: DashboardItemOrder,
} as ComponentMeta<typeof DashboardItemOrder>;

const Template: ComponentStory<typeof DashboardItemOrder> = (args) =>
  StorybookHelper.wrapInApp(
    <RouterProvider
      router={createMemoryRouter([
        {
          index: true,
          element: <DashboardItemOrder {...args} />,
        },
      ])}
    />,
    {
      queriesCallback: (queries) => {
        queries.push(QueryStateFactory(['product', order.product], { data: product }));
      },
    },
  );

const bind = () => {
  const bound = Template.bind({});
  bound.parameters = {
    docs: {
      source: {
        code: 'Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554',
      },
    },
  };
  return bound;
};

export const StateOther = bind();
StateOther.args = { order: { ...order, state: OrderState.CANCELED } };

export const NoTargetCourses = bind();
NoTargetCourses.args = { order };

export const OneTargetCourse = bind();
OneTargetCourse.args = { order: { ...order, target_courses: [targetsCourses[0]] } };

export const MultipleTargetCourses = bind();
MultipleTargetCourses.args = {
  order: {
    ...order,
    target_courses: targetsCourses,
    enrollments: [
      {
        ...enrollment,
        course_run: {
          ...enrollment.course_run,
          resource_link: targetsCourses[1].course_runs[0].resource_link,
        },
      },
      {
        ...enrollment,
        course_run: {
          ...enrollment.course_run,
          start: '2030-01-01T00:00:00Z',
          end: '2030-01-02T13:00:00Z',
          resource_link: targetsCourses[2].course_runs[0].resource_link,
        },
      },
    ],
  },
};
