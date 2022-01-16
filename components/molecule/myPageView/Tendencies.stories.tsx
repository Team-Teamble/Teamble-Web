import { Meta, Story } from "@storybook/react/types-6-0";
import { Tendencies, TendenciesProps } from "./Tendencies";
export default {
  title: "molecule/myPageView",
  component: Tendencies,
} as Meta;

const Template: Story<TendenciesProps> = (args) => {
  return <Tendencies {...args} />;
};

export const CollaboTendencies = Template.bind({});
CollaboTendencies.args = {};
