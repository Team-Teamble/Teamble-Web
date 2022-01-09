import { Meta, Story } from "@storybook/react/types-6-0";
import { BasicLink, BasicLinkProps } from "./BasicLink";

export default {
  title: "atom/login-button/BasicLink",
  component: BasicLink,
} as Meta;

const Template: Story<BasicLinkProps> = (args) => {
  return <BasicLink {...args} />;
};

export const Login = Template.bind({});
Login.args = {
  children: "회원가입",
} as BasicLinkProps;
