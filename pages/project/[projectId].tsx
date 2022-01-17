import { apiService } from "../../api";
import { withAuth } from "../../utils/ssr";

interface ViewProjectProps {
  projectId: number;
  projectDetail: ProjectDetail;
}

export default function ViewProject(props: ViewProjectProps) {
  const { projectId, projectDetail } = props;
  console.log(projectDetail);
  return <div>프로젝트 상세보기 ({projectId})</div>;
}

export const getServerSideProps = withAuth<ViewProjectProps>(async (context) => {
  const projectIdRaw = context.query.projectId;
  const projectId = tryGetNumber(projectIdRaw);

  if (projectId === null) {
    return {
      notFound: true,
    };
  }

  const [projectDetail] = await Promise.all([apiService.project.getProjectDetail(projectId)]);

  return {
    props: {
      projectId: projectId,
      projectDetail: projectDetail.project,
    },
  };
});

function tryGetNumber(val: string | string[] | undefined): number | null {
  if (val !== undefined && !isNaN(+val)) {
    return +val;
  }
  return null;
}

export interface ProjectDetail {
  id: number; // 프로젝트 id
  title: string; // 프로젝트 제목
  intro: string; // 프로젝트 한줄 소개
  photo: string; // 프로젝트 사진
  startDate: string; // 프로젝트 모집 시작 기간
  endDate: string; // 프로젝트 모집 종료 기간
  area: string; // 프로젝트 지역
  description: string; // 프로젝트 내용
  createdAt: string; // 프로젝트 생성 날짜
  updatedAt: string; // 프로젝트 수정 날짜
  isClosed: boolean; // 프로젝트 모집 종료 여부
  isDeleted: boolean; // 프로젝트 삭제 여부
  period: {
    // 프로젝트 예상 기간
    id: number; // 프로젝트 예상 기간 id
    name: string; // 프로젝트 예상 기간 이름
  };
  position: // 프로젝트 모집 포지션
  {
    id: number; // 프로젝트 모집 포지션 id
    name: string; // 프로젝트 모집 포지션 이름
    positionNum: {
      //  프로젝트 모집 인원
      id: number; // 프로젝트 모집 포지션 인원 id
      name: string; // 프로젝트 모집 포지션 인원 이름
    };
  }[];
  goal: {
    // 프로젝트 목표
    id: number; // 프로젝트 목표 id
    name: string; // 프로젝트 목표 이름
  };
  type: // 프로젝트 선호 협업 성향
  {
    id: number; // 프로젝트 선호 협업 성향 id
    name: string; // 프로젝트 선호 협업 성향 이름
  }[];
  field: // 프로젝트 분야
  {
    id: number; // 프로젝트 분야 id
    name: string; // 프로젝트 분야 이름
  }[];
  member: // 프로젝트 팀 구성원
  {
    id: number; // 프로젝트 팀 구성원 id
    name: string; // 프로젝트 팀 구성원 이름
    photo: string; // 프로젝트 팀 구성원 사진 url
  }[];
  user: {
    // 프로젝트를 만든 유저
    id: number; // 프로젝트를 만든 유저 id
    name: string; // 프로젝트를 만든 유저 이름
    photo: string; // 프로젝트를 만든 유저 사진 url
  };
}