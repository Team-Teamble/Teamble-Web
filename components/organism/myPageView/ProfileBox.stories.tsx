import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileBox, ProfileBoxProps } from "./ProfileBox";
import { useObject } from "../../../utils/hook/data";
export default {
  title: "organism/profile-box",
  component: ProfileBox,
} as Meta;

const Template: Story<ProfileBoxProps> = (args) => {
  const { data: user } = useObject({
    name: "haha",
    photo: "zz",
    phone: "010-1234-1234",
    position: [],
    email: "teamble@gmail.com",
    university: "팀블대학교",
    major: "컴공과",
    area: "서울/경기",
  });

  return <ProfileBox {...args} user={user} />;
};

export const Profile = Template.bind({});
Profile.args = {} as ProfileBoxProps;
