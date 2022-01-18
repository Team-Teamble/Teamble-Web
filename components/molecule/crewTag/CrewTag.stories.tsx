import { Meta, Story } from "@storybook/react/types-6-0";
import { CrewTag, CrewTagProps } from "./CrewTag";

export default {
  title: "molecule/crewTag",
  component: CrewTag,
} as Meta;

const Template: Story<CrewTagProps> = (args) => {
  return <CrewTag {...args} />;
};

export const Crewtag = Template.bind({});
