import { Meta, Story } from "@storybook/react/types-6-0";
import { LogInForm, LogInFormProps } from "./LogInForm";

export default {
  title: "organism/LogInForm",
  component: LogInForm,
} as Meta;

const Template: Story<LogInFormProps> = (args) => {
  return <LogInForm {...args} />;
};

export const LogInFormOrganism = Template.bind({});
