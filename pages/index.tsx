import LandingTemplate from "../components/template/LandingTemplate";
import { Header } from "../components/organism/landing/Header";
import React, { useEffect } from "react";
import { ProjectCard } from "../components/molecule/projectCard/ProjectCard";
import { useAPILegacy } from "../utils/hook/api";

export default function Home() {
  const topProjects = useAPILegacy((api) => api.landing.topProjects);

  const projectInfo = topProjects.data?.projectCard;

  useEffect(() => {
    topProjects.request();
  });

  return (
    <LandingTemplate
      header={
        <Header>{projectInfo && projectInfo.map((each) => <ProjectCard key={each.id} cardInfo={each} />)}</Header>
      }></LandingTemplate>
  );
}
