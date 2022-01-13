import { Meta, Story } from "@storybook/react/types-6-0";
import { Footer, FooterProps } from "./Footer";

export default {
  title: "organism/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />;
};

export const FooterOrganism = Template.bind({});
