import { useState } from "react";
import { withAuth } from "../../utils/ssr";
import { apiService } from "../../api";
import styled from "styled-components";
import { SearchProject as Main } from "../../components/template/searchProjectView/SearchProject";
import { SingleDropDown as Single } from "../../components/molecule/drop-down/SingleDropDown";
import { FilterGroupDropDown as Group } from "../../components/molecule/drop-down/FilterGroupDropDown";
import { ProjectCard } from "../../components/molecule/projectCard/ProjectCard";

export interface SearchProjectProps {
  searchProject: ProjectInfo;
  projectMetadata: ProjectMeta;
}

export default function SearchProject(props: SearchProjectProps) {
  const initial = {
    periodId: 1, // 선택한 기간 id
    positionId: 1, // 선택한 협업 포지션 id
    goalId: 1, // 선택한 목표 id
    tagId: [1], // 선택한 협업 성향 id
    fieldId: [1], // 선택한 관심 프로젝트 id
    count: 1, // 한 번(한 페이지)에 받을 프로젝트 개수
    page: 1, // 받을 페이지 번호 (1부터 시작)
  };
  const { searchProject, projectMetadata: meta } = props;
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>(searchProject);
  const [requestInfo, setRequestInfo] = useState<RequestInfo>(initial);

  console.log("request", requestInfo);

  const onUpdate: HandleRequestUpdate = (key, payload) => {
    setRequestInfo({ ...requestInfo, [key]: payload });
  };

  function onReset(category?: string, payload?: number[]) {
    if (category && payload) {
      setRequestInfo({ ...requestInfo, [category]: [...payload] });
      return;
    }
    setRequestInfo(initial);
  }

  return (
    <StyledSearchProject>
      <StyledMain>
        <Main
          period={<Single meta={meta.period} onChange={onUpdate} category="periodId" info={requestInfo.periodId} />}
          position={
            <Single meta={meta.position} onChange={onUpdate} category="positionId" info={requestInfo.positionId} />
          }
          goal={<Single meta={meta.goal} onChange={onUpdate} category="goalId" info={requestInfo.goalId} />}
          tag={
            <Group meta={meta.tag} onChange={onUpdate} category="tagId" onReset={onReset} info={requestInfo.tagId} />
          }
          field={
            <Group
              meta={meta.field}
              onChange={onUpdate}
              onReset={onReset}
              category="fieldId"
              info={requestInfo.fieldId}
            />
          }
          onReset={onReset}
          projectCards={
            Array.isArray(projectInfo) ? (
              projectInfo.map((each) => <ProjectCard key={each.id} cardInfo={each} />)
            ) : (
              <div>로딩중</div>
            )
          }
        />
      </StyledMain>
    </StyledSearchProject>
  );
}

const StyledSearchProject = styled.div`
  width: 100%;
`;

const StyledMain = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 10.2em;
  display: flex;
  justify-content: center;
`;
export const getServerSideProps = withAuth(async () => {
  const [searchProject, projectMetadata] = await Promise.all([
    apiService.project.searchProject({
      periodId: 1, // 선택한 기간 id
      positionId: 1, // 선택한 협업 포지션 id
      goalId: 1, // 선택한 목표 id
      tagId: [1], // 선택한 협업 성향 id
      fieldId: [1], // 선택한 관심 프로젝트 id
      count: 1, // 한 번(한 페이지)에 받을 프로젝트 개수
      page: 1,
    }),
    apiService.project.getSearchMetadata(),
  ]);

  return {
    props: {
      searchProject: searchProject.projectCard,
      projectMetadata: projectMetadata.project,
    },
  };
});

interface HandleRequestUpdate {
  <K extends keyof RequestInfo>(category: K, payload: RequestInfo[K]): void;
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

interface ProjectMeta {
  period: [
    // 프로젝트 기간
    {
      id: number; // 프로젝트 기간 id
      name: string; // 프로젝트 예상 기간 이름
    },
  ];
  position: [
    // 프로젝트 모집 포지션
    {
      id: number; // 프로젝트 모집 포지션 id
      name: string; // 프로젝트 모집 포지션 이름
      positionNum: [
        //  프로젝트 모집 인원
        {
          id: number; // 프로젝트 모집 포지션 인원 id
          name: string; // 프로젝트 모집 포지션 인원 이름
        },
      ];
    },
  ]; // 프로젝트 목표
  goal: [
    {
      id: number; // 프로젝트 목표 id
      name: string; // 프로젝트 목표 이름
    },
  ];
  tag: [
    // 프로젝트 선호 협업 성향
    {
      id: number; // 선호 협업 성향 id
      name: string; // 선호 협업 성향 이름
    },
  ];

  field: [
    // 프로젝트 분야
    {
      id: number; // 프로젝트 분야 id
      name: string; // 프로젝트 분야 이름
    },
  ];
}

interface RequestInfo {
  periodId: number; // 선택한 기간 id
  positionId: number; // 선택한 협업 포지션 id
  goalId: number; // 선택한 목표 id
  tagId: number[]; // 선택한 협업 성향 id
  fieldId: number[]; // 선택한 관심 프로젝트 id
  count: number; // 한 번(한 페이지)에 받을 프로젝트 개수
  page: number; // 받을 페이지 번호 (1부터 시작)
}
