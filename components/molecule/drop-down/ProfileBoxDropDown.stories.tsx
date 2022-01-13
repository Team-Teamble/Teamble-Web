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
MyPage.args = {
  position: [
    { id: 1, name: "선택" },
    { id: 2, name: "개발자" },
    { id: 3, name: "디자이너" },
    { id: 4, name: "기획자" },
  ],
} as ProfileBoxDropDownProps;
