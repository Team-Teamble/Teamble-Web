import { Meta, Story } from "@storybook/react/types-6-0";
import { TagBox, TagBoxProps } from "../../molecule/tagBox/TagBox";

export default {
  title: "molecule/TagBox",
  component: TagBox,
} as Meta;

const Template: Story<TagBoxProps> = (args) => {
  return <TagBox {...args} />;
};

export const Tagbox = Template.bind({});
Tagbox.args = {};
