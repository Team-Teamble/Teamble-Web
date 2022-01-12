import { Meta, Story } from "@storybook/react/types-6-0";
import { CopyModal, CopyModalProps } from "./CopyModal";
export default {
  title: "molecule/modal",
  component: CopyModal,
} as Meta;

const Template: Story<CopyModalProps> = (args) => {
  return <CopyModal {...args} />;
};

export const Copy = Template.bind({});
Copy.args = {} as CopyModalProps;
