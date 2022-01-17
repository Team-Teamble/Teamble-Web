import { Meta, Story } from "@storybook/react/types-6-0";
import { ProjectSummary, ProjectSummaryProps } from "./ProjectSummary";

export default {
  title: "organism/ProjectDetail/Summary",
  component: ProjectSummary,
} as Meta;

const Template: Story<ProjectSummaryProps> = (args) => {
  return <ProjectSummary {...args} />;
};

export const Summary = Template.bind({});

Summary.args = {
  endDate: "2021-11-37T01:06:14.2472",
  area: "서울",
  period: {
    id: 1,
    name: "1주 ~ 1개월",
  },
  position: [
    {
      id: 1,
      name: "기획자",
      positionNum: {
        id: 3,
        name: "2",
      },
    },
    {
      id: 2,
      name: "기획자2",
      positionNum: {
        id: 2,
        name: "3",
      },
    },
  ],
  goal: {
    id: 1,
    name: "프로젝트 개발",
  },
  tag: [
    {
      id: 1,
      name: "열정적인",
    },
    {
      id: 2,
      name: "열정적인",
    },
  ],
  field: [
    {
      id: 1,
      name: "여행",
    },

    {
      id: 2,
      name: "게임",
    },
  ],
};
