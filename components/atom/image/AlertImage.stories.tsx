import { Meta, Story } from "@storybook/react/types-6-0";
import { AlertImage, AlertImageProps } from "./AlertImage";

export default {
  title: "atom/image",
  component: AlertImage,
} as Meta;

const Template: Story<AlertImageProps> = (args) => {
  return <AlertImage {...args} />;
};

export const Alertbell = Template.bind({});
