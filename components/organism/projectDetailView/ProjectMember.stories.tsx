import { Meta, Story } from "@storybook/react/types-6-0";
import { ProjectMember, ProjectMemberProps } from "./ProjectMember";

export default {
  title: "organism/ProjectDetail/Member",
  component: ProjectMember,
} as Meta;

const Template: Story<ProjectMemberProps> = (args) => {
  return <ProjectMember {...args} />;
};

export const Summary = Template.bind({});

Summary.args = {
  member: [
    // 프로젝트 팀 구성원
    {
      id: 1, // 프로젝트 팀 구성원 id
      name: "youn", // 프로젝트 팀 구성원 이름
      photo:
        "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3", // 프로젝트 팀 구성원 사진 url
    },
    {
      id: 2, // 프로젝트 팀 구성원 id
      name: "kim", // 프로젝트 팀 구성원 이름
      photo: "", // 프로젝트 팀 구성원 사진 url
    },
    {
      id: 3, // 프로젝트 팀 구성원 id
      name: "연이", // 프로젝트 팀 구성원 이름
      photo: "", // 프로젝트 팀 구성원 사진 url
    },
    {
      id: 4, // 프로젝트 팀 구성원 id
      name: "크크", // 프로젝트 팀 구성원 이름
      photo: "", // 프로젝트 팀 구성원 사진 url
    },
  ],
};
