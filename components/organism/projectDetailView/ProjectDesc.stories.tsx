import { Meta, Story } from "@storybook/react/types-6-0";
import { ProjectDesc, ProjectDescProp } from "./ProjectDesc";

export default {
  title: "organism/ProjectDetail/Desc",
  component: ProjectDesc,
} as Meta;

const Template: Story<ProjectDescProp> = (args) => {
  return <ProjectDesc {...args} />;
};

export const Description = Template.bind({});
