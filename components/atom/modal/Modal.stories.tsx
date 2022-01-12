import { Meta, Story } from "@storybook/react/types-6-0";
import { ModalBg } from "./ModalBg";

export default {
  title: "atom/modal-bg",
  component: ModalBg,
} as Meta;

const Template: Story = (args) => {
  return <ModalBg {...args} />;
};

export const BG = Template.bind({});
