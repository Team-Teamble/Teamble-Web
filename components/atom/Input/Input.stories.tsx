import { Meta, Story } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./Input";

export default {
  title: "atom/input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  return <Input {...args} />;
};

export const Email = Template.bind({});
Email.args = {
  placeholder: "이메일 주소(ID)를 입력해주세요",
} as InputProps;

export const Password = Template.bind({});
Password.args = {
  placeholder: "비밀번호를 입력해주세요",
} as InputProps;
