import { Meta, Story } from "@storybook/react/types-6-0";
import { CopyModalProps, CopyModal } from "./CopyModal";

export default {
  title: "atom/modal",
  component: CopyModal,
} as Meta;

const Template: Story<CopyModalProps> = (args) => {
  return <CopyModal {...args} />;
};

export const Copy = Template.bind({});
Copy.args = {} as CopyModalProps;
