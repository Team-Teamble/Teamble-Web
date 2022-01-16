import { Meta, Story } from "@storybook/react/types-6-0";
import { FoldButton, FoldButtonProps } from "./FoldButton";

export default {
  title: "atom/button",
  component: FoldButton,
} as Meta;

const Template: Story<FoldButtonProps> = (args) => {
  return <FoldButton {...args} />;
};

export const Fold = Template.bind({});
Fold.args = {} as FoldButtonProps;
