import { useEffect, useRef, useState } from "react";
import { withAuth } from "../../utils/ssr";
import { apiService } from "../../api";
import styled from "styled-components";
import { SearchProject as Main } from "../../components/template/searchProjectView/SearchProject";
import { SingleDropDown as Single } from "../../components/molecule/drop-down/SingleDropDown";
import { FilterGroupDropDown as Group } from "../../components/molecule/drop-down/FilterGroupDropDown";
import { ProjectCard } from "../../components/molecule/projectCard/ProjectCard";
import useInfinityScroll from "../../utils/hook/useInfinityScroll";
import { useAPINew } from "../../api/hook";

export interface SearchProjectProps {
  projectMetadata: ProjectMeta;
}

export default function SearchProject(props: SearchProjectProps) {
  const initial = {
    periodId: 1, // 선택한 기간 id
    positionId: 1, // 선택한 협업 포지션 id
    goalId: 1, // 선택한 목표 id
    tagId: [1], // 선택한 협업 성향 id
    fieldId: [1], // 선택한 관심 프로젝트 id
    count: 6, // 한 번(한 페이지)에 받을 프로젝트 개수
    page: 1, // 받을 페이지 번호 (1부터 시작)
  };
  const {
    projectMetadata: { project: meta },
  } = props;
  const search = useAPINew((api) => api.project.searchProject);
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({ projectCard: [] });
  const [requestInfo, setRequestInfo] = useState<RequestInfo>(initial);
  const [isMoreData, setIsMoreData] = useState<boolean>(true);
  const observerRef = useRef(null);
  const isIntersected = useInfinityScroll(observerRef);

  useEffect(() => {
    if (isIntersected && isMoreData) {
      (async () => {
        try {
          const data = await search.request(requestInfo);

          if (data && data.projectCard.length > 0) {
            setProjectInfo({ projectCard: [...projectInfo.projectCard, ...data.projectCard] });
            setRequestInfo({ ...requestInfo, page: requestInfo.page + 1 });
          } else {
            setIsMoreData(false);
          }
        } catch (e) {
          throw e;
        }
      })();
    }
  }, [isIntersected, isMoreData, setIsMoreData]);

  const onUpdate: HandleRequestUpdate = (key, payload) => {
    setRequestInfo({ ...requestInfo, [key]: payload });
  };

  async function handleSearch() {
    try {
      const filtered = await search.request({ ...requestInfo, page: 1 });
      filtered ? setProjectInfo(filtered) : setProjectInfo({ projectCard: [] });
      setIsMoreData(true);
      setRequestInfo({ ...requestInfo, page: 2 });
    } catch {
      alert("error");
    }
  }

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
          onClick={handleSearch}
          title="사이드 프로젝트 찾기"
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
          projectCards={projectInfo.projectCard.map((each) => (
            <ProjectCard key={each.id} cardInfo={each} />
          ))}
        />
        <div ref={observerRef} />
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
  flex-direction: column;
  align-items: center;
`;
export const getServerSideProps = withAuth<SearchProjectProps>(async () => {
  const [projectMetadata] = await Promise.all([apiService.project.getSearchMetadata()]);

  return {
    props: {
      projectMetadata: projectMetadata,
    },
  };
});

interface HandleRequestUpdate {
  <K extends keyof RequestInfo>(category: K, payload: RequestInfo[K]): void;
}
interface ProjectInfo {
  projectCard: {
    id: number; // 프로젝트 id
    title: string; // 프로젝트 제목
    intro: string; // 프로젝트 한줄소개
    photo: string; // 프로젝트 사진
    startDate: string; // 프로젝트 시작 날짜
    endDate: string; // 프로젝트 마감 날짜
    isClosed: boolean; // 프로젝트 모집 완료 여부
    position: {
      // 프로젝트 협업 포지션
      id: number; // 프로젝트 협업 포지션 id
      name: string; // 프로젝트 협업 포지션 이름
      num: string; // 프로젝트 협업 포지션 인원 이름
    }[];
    user: {
      // 프로젝트를 만든 유저
      id: number; // 프로젝트를 만든 유저 id
      name: string; // 프로젝트를 만든 유저 이름
      photo: string; // 프로젝트를 만든 유저 사진 url
    };
  }[];
}

interface ProjectMeta {
  project: {
    period: {
      // 프로젝트 기간
      id: number; // 프로젝트 기간 id
      name: string; // 프로젝트 예상 기간 이름
    }[];
    position: {
      // 프로젝트 모집 포지션
      id: number; // 프로젝트 모집 포지션 id
      name: string; // 프로젝트 모집 포지션 이름
      positionNum: {
        //  프로젝트 모집 인원
        id: number; // 프로젝트 모집 포지션 인원 id
        name: string; // 프로젝트 모집 포지션 인원 이름
      }[];
    }[];
    goal: {
      // 프로젝트 목표
      id: number; // 프로젝트 목표 id
      name: string; // 프로젝트 목표 이름
    }[];
    tag: {
      // 프로젝트 선호 협업 성향
      id: number; // 선호 협업 성향 id
      name: string; // 선호 협업 성향 이름
    }[];
    field: {
      // 프로젝트 분야
      id: number; // 프로젝트 분야 id
      name: string; // 프로젝트 분야 이름
    }[];
  };
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
