import { Meta, Story } from "@storybook/react/types-6-0";
import { BasicButton, BasicButtonProps } from "./BasicButton";

export default {
  title: "atom/login-button/BasicButton",
  component: BasicButton,
} as Meta;

const Template: Story<BasicButtonProps> = (args) => {
  return <BasicButton {...args} />;
};

export const Login = Template.bind({});
Login.args = {
  children: "로그인",
} as BasicButtonProps;
