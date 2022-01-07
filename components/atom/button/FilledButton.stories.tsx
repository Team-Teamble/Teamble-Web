import { Meta, Story } from "@storybook/react/types-6-0";
import { FilledButton, ButtonProps } from "./FilledButton";

export default {
  title: "atom/button",
  component: FilledButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <FilledButton {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
} as ButtonProps;
