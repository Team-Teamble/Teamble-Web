import { Meta, Story } from "@storybook/react/types-6-0";
import { ProjectHeader, ProjectHeaderProps } from "./ProjectHeader";

export default {
  title: "organism/ProjectDetail/Header",
  component: ProjectHeader,
} as Meta;

const Template: Story<ProjectHeaderProps> = (args) => {
  return <ProjectHeader {...args} />;
};

export const Header = Template.bind({});

Header.args = {
  title: "프로젝트 제목",
  intro: "프로젝트 한줄소개를 적어주세요! 적어주세요 적어주세요 적어..",
  user: {
    id: 1,
    name: "김연이",
    photo: "",
  },
};
