import { Meta, Story } from "@storybook/react/types-6-0";
import { MakeProjectButtonProps, MakeProjectButton } from "./MakeProjectButton";
export default {
  title: "atom/button/MakeProjectButton",
  component: MakeProjectButton,
} as Meta;

const Template: Story<MakeProjectButtonProps> = (args) => {
  return <MakeProjectButton {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as MakeProjectButtonProps;
