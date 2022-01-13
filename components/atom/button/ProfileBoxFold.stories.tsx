import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileBoxFoldProps, ProfileBoxFold } from "./ProfileBoxFold";

export default {
  title: "atom/button/ProfileBoxFold",
  component: ProfileBoxFold,
} as Meta;

const Template: Story<ProfileBoxFoldProps> = (args) => {
  return <ProfileBoxFold {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  isOpened: false,
  currentOption: "선택",
} as ProfileBoxFoldProps;
