import { Meta, Story } from "@storybook/react/types-6-0";
import { ConfirmButton, ConfirmButtonProps } from "./ConfirmButton";

export default {
  title: "atom/button",
  component: ConfirmButton,
} as Meta;

const Template: Story<ConfirmButtonProps> = (args) => {
  return <ConfirmButton {...args} />;
};

export const Confirm = Template.bind({});
Confirm.args = {
  value: "프로젝트 완료",
} as ConfirmButtonProps;
