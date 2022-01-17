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
