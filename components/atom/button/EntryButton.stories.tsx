import { Meta, Story } from "@storybook/react/types-6-0";
import { EntryButton, EntryButtonProps } from "./EntryButton";

export default {
  title: "atom/button/EntryButton",
  subcomponent: EntryButton,
} as Meta;

const Template: Story<EntryButtonProps> = (args) => {
  return <EntryButton {...args} />;
};

export const Entry = Template.bind({});
Entry.args = {
  children: "로그인",
} as EntryButtonProps;
