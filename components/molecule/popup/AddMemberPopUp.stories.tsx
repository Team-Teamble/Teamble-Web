import { Meta, Story } from "@storybook/react/types-6-0";
import { AddMemberPopUp } from "./AddMemberPopUp";

export default {
  title: "molecule/PopUp",
  component: AddMemberPopUp,
} as Meta;

const Template: Story = (args) => {
  return <AddMemberPopUp {...args} />;
};

export const AddMember = Template.bind({});
AddMember.args = {};
