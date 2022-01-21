import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileTestButton, ProfileTestBtnProps } from "./ProfileTestButton";

export default {
  title: "atom/button",
  component: ProfileTestButton,
} as Meta;

const Template: Story<ProfileTestBtnProps> = (args) => {
  return <ProfileTestButton {...args} />;
};

export const ProfileTest = Template.bind({});
ProfileTest.args = {} as ProfileTestBtnProps;
