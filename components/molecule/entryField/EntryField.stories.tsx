import { Meta, Story } from "@storybook/react/types-6-0";
import { EntryField, EntryFieldProps } from "./EntryField";

export default {
  title: "molecule/entryfield",
  component: EntryField,
} as Meta;

const Template: Story<EntryFieldProps> = (args) => {
  return <EntryField {...args} />;
};

export const Basic = Template.bind({});
