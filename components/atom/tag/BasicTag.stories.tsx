import { Meta, Story } from "@storybook/react/types-6-0";
import { BasicTag, BasicTagProps } from "./BasicTag";

export default {
  title: "atom/tag/basic",
  component: BasicTag,
} as Meta;

const Template: Story<BasicTagProps> = (args) => {
  return <BasicTag {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "소셜 네트워크",
  tagSize: "small",
} as BasicTagProps;
