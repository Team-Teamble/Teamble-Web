import { Meta, Story } from "@storybook/react/types-6-0";
import { ProjectMember, ProjectMemberProps } from "./ProjectMember";

export default {
  title: "organism/ProjectDetail/Member",
  component: ProjectMember,
} as Meta;

const Template: Story<ProjectMemberProps> = (args) => {
  return <ProjectMember {...args} />;
};

export const Summary = Template.bind({});
