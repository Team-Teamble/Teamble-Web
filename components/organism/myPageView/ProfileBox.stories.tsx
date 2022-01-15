import { useEffect } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileBox, ProfileBoxProps } from "./ProfileBox";
import { useMyPage } from "../../../utils/myPage";
export default {
  title: "organism/profile-box",
  component: ProfileBox,
} as Meta;

const Template: Story<ProfileBoxProps> = (args) => {
  const { user, handleUpdate } = useMyPage({
    id: 1,
    idFirebase: "ehxIllyXpcSXANkvEUYUqI2kCaZ2",
    name: "김팀블",
    email: "teamble@gmail.com",
    phone: "010-1234-5678",
    photo: "",
    university: "팀블대학교",
    major: "컴퓨터공학과",
    area: "서울/경기",
    intro: "유저 한줄소개",
    description: "유저 내용",
    isChecked: false,
    createdAt: "2021-11-37T01:06:14.2472",
    updatedAt: "2021-11-37T01:06:14.2472",
    isDeleted: false,
    projectId: 1,
    type: {
      id: 3,
      name: "정열적인 빨강",
    },
    tag: [
      {
        id: 1,
        name: "성실함",
      },
      {
        id: 3,
        name: "꼼꼼함",
      },
    ],
    position: [
      {
        id: 2,
        name: "개발자",
      },
      {
        id: 3,
        name: "기획자",
      },
    ],
    field: [
      {
        id: 1,
        name: "O2O",
      },
      {
        id: 3,
        name: "반려동물",
      },
    ],
  });
  useEffect(() => {
    console.log(user);
  }, [user]);
  return <ProfileBox {...args} user={user} handleUpdate={handleUpdate} />;
};

export const Profile = Template.bind({});
Profile.args = {
  meta: {
    position: [
      {
        id: 1,
        name: "기획자",
      },
      {
        id: 2,
        name: "개발자",
      },
      {
        id: 3,
        name: "디자이너",
      },
    ],
    type: [
      {
        id: 1,
        name: "정열적인 빨강이",
      },
      {
        id: 2,
        name: "느긋한 초록이",
      },
    ],
    field: [
      {
        id: 1,
        name: "O2O",
      },
      {
        id: 2,
        name: "여행",
      },
    ],
  },
} as ProfileBoxProps;
