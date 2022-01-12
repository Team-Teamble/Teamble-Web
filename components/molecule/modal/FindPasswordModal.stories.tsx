import { Meta, Story } from "@storybook/react/types-6-0";
import { FindPasswordModal } from "./FindPasswordModal";

export default {
  title: "molecule/modal",
  component: FindPasswordModal,
} as Meta;

const Template: Story = (args) => {
  return <FindPasswordModal {...args} />;
};

export const FindPassword = Template.bind({});
