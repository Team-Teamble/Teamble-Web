import { Meta, Story } from "@storybook/react/types-6-0";
import { LoginButton, LoginButtonProps } from "./LoginButton";

export default {
  title: "atom/button/LoginButton",
  component: LoginButton,
} as Meta;

const Template: Story<LoginButtonProps> = (args) => {
  return <LoginButton {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
} as LoginButtonProps;
