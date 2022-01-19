import { withAuth } from "../utils/ssr";
import LandingTemplate from "../components/template/LandingTemplate";
import { Header } from "../components/organism/landing/Header";
import { apiService } from "../api";
import { useState } from "react";
import { ProjectCard } from "../components/molecule/projectCard/ProjectCard";

interface ProjectCardProps {
  topProjects: ProjectInfo;
}

export default function Home(props: ProjectCardProps) {
  const { topProjects } = props;

  const [projectInfo, setProjectInfo] = useState<ProjectInfo>(topProjects);

  console.log(projectInfo);
  return (
    <LandingTemplate
      header={
        <Header>
          {Array.isArray(projectInfo) ? (
            projectInfo.map((each) => <ProjectCard key={each.id} cardInfo={each} />)
          ) : (
            <div>로딩중</div>
          )}
        </Header>
      }></LandingTemplate>
  );
}

export const getServerSideProps = withAuth(async () => {
  const [topProjects] = await Promise.all([apiService.landing.topProjects()]);

  return {
    props: {
      topProjects: topProjects.topProject,
    },
  };
});

export interface TopProjectsOutput {
  topProject: [
    {
      id: number; // 프로젝트 id
      title: string; // 프로젝트 제목
      intro: string; // 프로젝트 한줄 소개
      photo: string; // 프로젝트 사진 url
      startDate: string; // 프로젝트 모집 시작 날짜
      endDate: string; // 프로젝트 모집 마감 날짜
      isClosed: boolean; // 프로젝트 모집 완료 여부
      position: {
        id: number; // 포지션 id
        name: string; // 포지션 이름
        num: number; // 모집 인원
      }[];
      user: {
        id: number; // 프로젝트 작성자 id
        name: string; // 프로젝트 작성자 이름
        photo: string; // 프로젝트 작성자 프로필 사진 url
      };
    },
  ];
}

interface ProjectInfo {
  project: [
    {
      id: number; // 프로젝트 id
      title: string; // 프로젝트 제목
      intro: string; // 프로젝트 한줄소개
      photo: string; // 프로젝트 사진
      startDate: string; // 프로젝트 시작 날짜
      endDate: string; // 프로젝트 마감 날짜
      isClosed: boolean; // 프로젝트 모집 완료 여부
      position: [
        // 프로젝트 협업 포지션
        {
          id: number; // 프로젝트 협업 포지션 id
          name: string; // 프로젝트 협업 포지션 이름
          positionNum: {
            // 프로젝트 협업 포지션 인원
            id: number; // 프로젝트 협업 포지션 인원 id
            name: string; // 프로젝트 협업 포지션 인원 이름
          };
        },
      ];
      user: {
        // 프로젝트를 만든 유저
        id: number; // 프로젝트를 만든 유저 id
        name: string; // 프로젝트를 만든 유저 이름
        photo: string; // 프로젝트를 만든 유저 사진 url
      };
    },
  ];
}
