import { withAuth } from "../utils/ssr";
import LandingTemplate from "../components/template/LandingTemplate";
import { Header } from "../components/organism/landing/Header";
import { apiService } from "../api";
import React, { useState } from "react";
import { ProjectCard } from "../components/molecule/projectCard/ProjectCard";
interface ProjectCardProps {
  topProjects: ProjectInfo[];
}

export default function Home(props: ProjectCardProps) {
  const { topProjects } = props;

  const [projectInfo] = useState<ProjectInfo[]>(topProjects);

  return (
    <LandingTemplate
      header={
        <Header>
          {projectInfo.map((each) => (
            <ProjectCard key={each.id} cardInfo={each} />
          ))}
        </Header>
      }></LandingTemplate>
  );
}

export const getServerSideProps = withAuth<ProjectCardProps>(async () => {
  const [topProjects] = await Promise.all([apiService.landing.topProjects()]);
  return {
    props: {
      topProjects: topProjects.projectCard,
    },
  };
});

interface ProjectInfo {
  // 주목할만한 프로젝트
  id: number; // 프로젝트 id
  title: string; // 프로젝트 제목
  intro: string; // 프로젝트 한줄 소개
  photo: string; // 프로젝트 사진 url
  startDate: string; // 프로젝트 모집 시작 날짜
  endDate: string; // 프로젝트 모집 마감 날짜
  isClosed: boolean; // 프로젝트 모집 완료 여부
  position: {
    // 프로젝트 모집 포지션
    id: number; // 포지션 id
    name: string; // 포지션 이름
    num: string; // 모집 인원
  }[];
  user: {
    // 프로젝트 작성자
    id: number; // 프로젝트 작성자 id
    name: string; // 프로젝트 작성자 이름
    photo: string; // 프로젝트 작성자 프로필 사진 url
  };
}
