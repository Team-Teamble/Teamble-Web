import { Meta, Story } from "@storybook/react/types-6-0";
import { MakeProjectFoldButtonProps, MakeProjectFoldButton } from "./MakeProjectFoldButton";

export default {
  title: "atom/button/MakeProjectFoldButton",
  component: MakeProjectFoldButton,
} as Meta;

const Template: Story<MakeProjectFoldButtonProps> = (args) => {
  return <MakeProjectFoldButton {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  title: "기획자",
  currentOption: 0,
} as MakeProjectFoldButtonProps;
