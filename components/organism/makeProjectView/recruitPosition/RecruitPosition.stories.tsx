import { Meta, Story } from "@storybook/react/types-6-0";
import { RecruitPosition, RecruitPositionProps } from "./RecruitPosition";

export default {
  title: "organism/makeProjectView/recruitPosition",
  component: RecruitPosition,
} as Meta;

const Template: Story<RecruitPositionProps> = (args) => {
  return <RecruitPosition {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  position: [
    {
      id: 1,
      name: "기획자",
      positionNum: [
        {
          id: 11,
          option: "0 명",
        },
        {
          id: 12,
          option: "1 명",
        },
        {
          id: 13,
          option: "2 명",
        },
        {
          id: 14,
          option: "3 명",
        },
      ],
    },
    {
      id: 2,
      name: "디자이너",
      positionNum: [
        {
          id: 21,
          option: "0 명",
        },
        {
          id: 22,
          option: "1 명",
        },
        {
          id: 23,
          option: "2 명",
        },
        {
          id: 24,
          option: "3 명",
        },
      ],
    },
    {
      id: 3,
      name: "개발자",
      positionNum: [
        {
          id: 31,
          option: "0 명",
        },
        {
          id: 32,
          option: "1 명",
        },
        {
          id: 33,
          option: "2 명",
        },
        {
          id: 34,
          option: "3 명",
        },
      ],
    },
  ],
} as RecruitPositionProps;
