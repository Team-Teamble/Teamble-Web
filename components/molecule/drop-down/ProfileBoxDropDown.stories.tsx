import { Story, Meta } from "@storybook/react/types-6-0";
import { ProfileBoxDropDown, ProfileBoxDropDownProps } from "./ProfileBoxDropDown";

export default {
  title: "molecule/drop-down/ProfileBoxDropDown",
  component: ProfileBoxDropDown,
} as Meta;

const Template: Story<ProfileBoxDropDownProps> = (args) => {
  return <ProfileBoxDropDown {...args} />;
};

export const MyPage = Template.bind({});
MyPage.args = {} as ProfileBoxDropDownProps;
