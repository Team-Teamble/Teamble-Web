import { Meta, Story } from "@storybook/react/types-6-0";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export default {
  title: "molecule/ProjectCard",
  component: ProjectCard,
} as Meta;

const Template: Story<ProjectCardProps> = (args) => {
  return <ProjectCard {...args} />;
};

export const Projectcard = Template.bind({});
Projectcard.args = {};
