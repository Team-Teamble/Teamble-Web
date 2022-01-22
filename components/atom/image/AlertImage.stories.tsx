import { Meta, Story } from "@storybook/react/types-6-0";
import { AlertLink, AlertImageProps } from "./AlertImage";

export default {
  title: "atom/image",
  component: AlertLink,
} as Meta;

const Template: Story<AlertImageProps> = (args) => {
  return <AlertLink {...args} />;
};

export const Alertbell = Template.bind({});
