import { Meta, Story } from "@storybook/react/types-6-0";
import { NavTabItem, NavTabItemProps } from "./NavTabItem";

export default {
  title: "atom/item",
  component: NavTabItem,
} as Meta;

const Template: Story<NavTabItemProps> = (args) => {
  return <NavTabItem {...args} />;
};

export const Basic = Template.bind({});
