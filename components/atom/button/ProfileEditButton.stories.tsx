import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileEditButton, ProfileEditButtonProps } from "./ProfileEditButton";

export default {
  title: "atom/button",
  component: ProfileEditButton,
} as Meta;

const Template: Story<ProfileEditButtonProps> = (args) => {
  return <ProfileEditButton {...args} />;
};

export const ProfileEdit = Template.bind({});
ProfileEdit.args = {} as ProfileEditButtonProps;
