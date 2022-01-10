import { Meta, Story } from "@storybook/react/types-6-0";
import { NavProfileName, NavProfileNameProps } from "./NavProfileName";

export default {
  title: "atom/item",
  component: NavProfileName,
} as Meta;

const Template: Story<NavProfileNameProps> = (args) => {
  return <NavProfileName {...args} />;
};

export const Profilename = Template.bind({});
Profilename.args = {
  children: "마가렛",
};
