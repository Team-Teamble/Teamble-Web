import { Story, Meta } from "@storybook/react/types-6-0";
import { SingleDropDown, SingleDropDownProps } from "./SingleDropDown";

export default {
  title: "molecule/drop-down/SingleDropDown",
  component: SingleDropDown,
} as Meta;

const Template: Story<SingleDropDownProps> = (args) => {
  return <SingleDropDown {...args} />;
};

export const MyPage = Template.bind({});
MyPage.args = {} as SingleDropDownProps;
