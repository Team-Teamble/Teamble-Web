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
