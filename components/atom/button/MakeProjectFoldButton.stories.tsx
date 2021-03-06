import { Meta, Story } from "@storybook/react/types-6-0";
import { MakeProjectFoldButtonProps, MakeProjectFoldButton } from "./MakeProjectFoldButton";

export default {
  title: "atom/button/MakeProjectFoldButton",
  component: MakeProjectFoldButton,
  decorators: [
    (Story) => (
      <div style={{ width: "380px", height: "66px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<MakeProjectFoldButtonProps> = (args) => {
  return <MakeProjectFoldButton {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  id: 1,
  name: "기획자",
  currentOption: "0 명",
} as MakeProjectFoldButtonProps;
