import { Meta, Story } from "@storybook/react/types-6-0";
import { RegisterForm, RegisterFormProps } from "./RegisterForm";

export default {
  title: "organism/RegisterForm",
  component: RegisterForm,
} as Meta;

const Template: Story<RegisterFormProps> = (args) => {
  return <RegisterForm {...args} />;
};

export const RegisterFormOrganism = Template.bind({});
RegisterFormOrganism.args = {
  disabled: true,
};
