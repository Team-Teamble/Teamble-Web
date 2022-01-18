export interface ProjectAPI {
  getProjectMetadata(): Promise<GetProjectMetadataOutput>;
  createProject(): Promise<CreateProjectOutput>;
  addMemberToProject(data: AddMemberToProjectInput): Promise<AddMemberToProjectOutput>;
  getSearchMetadata(): Promise<GetSearchMetadataOutput>;
  searchProject(data: SearchProjectInput): Promise<SearchProjectOutput>;
  getProjectDetail(projectId: string): Promise<ProjectDetail>;
  markCompleteProject(projectId: string): Promise<ProjectDetail>;
}

export interface GetProjectMetadataOutput {
  project: {
    // 프로젝트
    period: // 프로젝트 기간
    {
      id: number; // 프로젝트 기간 id
      name: string; // 프로젝트 예상 기간 이름
    }[];
    position: // 프로젝트 모집 포지션
    {
      id: number; // 프로젝트 모집 포지션 id
      name: string; // 프로젝트 모집 포지션 이름
      positionNum: // 프로젝트 모집 인원
      {
        id: number; // 프로젝트 모집 포지션 인원 id
        name: string; // 프로젝트 모집 포지션 인원 이름
      }[];
    }[];
    goal: // 프로젝트 목표
    {
      id: number; // 프로젝트 목표 id
      name: string; // 프로젝트 목표 이름
    }[];
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
  };
}

export interface CreateProjectInput {
  title: string; // 프로젝트 제목
  intro: string; // 프로젝트 한줄 소개
  periodId: number; // 프로젝트 예상 기간 id
  position: // 프로젝트 모집 포지션
  {
    id: number; // 프로젝트 모집 포지션 id
    numId: number; // 프로젝트 모집 포지션 인원 id
  }[];

  goalId: number; // 프로젝트 목표 id
  typeId: number[]; // 프로젝트 선호 협업 성향 id
  fieldId: number[]; // 프로젝트 분야 id
  area: string; // 프로젝트 지역
  startDate: string; // 프로젝트 모집 시작 날짜
  endDate: string; // 프로젝트 모집 마감 날짜
  description: string; // 프로젝트 내용
  teamId: number[] | null; // 프로젝트 팀 구성원
}

export interface CreateProjectOutput {
  project: {
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
    position: [
      // 프로젝트 모집 포지션
      {
        id: number; // 프로젝트 모집 포지션 id
        name: string; // 프로젝트 모집 포지션 이름
        positionNum: {
          //  프로젝트 모집 인원
          id: number; // 프로젝트 모집 포지션 인원 id
          name: string; // 프로젝트 모집 포지션 인원 이름
        };
      },
    ];
    goal: {
      // 프로젝트 목표
      id: number; // 프로젝트 목표 id
      name: string; // 프로젝트 목표 이름
    };
    type: [
      // 프로젝트 선호 협업 성향
      {
        id: number; // 프로젝트 선호 협업 성향 id
        name: string; // 프로젝트 선호 협업 성향 이름
      },
    ];
    field: [
      // 프로젝트 분야
      {
        id: number; // 프로젝트 분야 id
        name: string; // 프로젝트 분야 이름
      },
    ];
    member: [
      // 프로젝트 팀 구성원
      {
        id: number; // 프로젝트 팀 구성원 id
        name: string; // 프로젝트 팀 구성원 이름
        photo: string; // 프로젝트 팀 구성원 사진 url
      },
    ];
    user: {
      // 프로젝트를 만든 유저
      id: number; // 프로젝트를 만든 유저 id
      name: string; // 프로젝트를 만든 유저 이름
      photo: string; // 프로젝트를 만든 유저 사진 url
    };
  };
}

export interface AddMemberToProjectInput {
  email: string;
}

export interface AddMemberToProjectOutput {
  member: {
    id: number; // 팀 구성원 id
    name: string; // 팀 구성원 이름
    photo: string; // 팀 구성원 사진 url
  }[];
}

export interface GetSearchMetadataOutput {
  project: {
    period: // 프로젝트 기간
    {
      id: number; // 프로젝트 기간 id
      name: string; // 프로젝트 예상 기간 이름
    }[];
    position: // 프로젝트 모집 포지션
    {
      id: number; // 프로젝트 모집 포지션 id
      name: string; // 프로젝트 모집 포지션 이름
    }[];
    goal: // 프로젝트 목표
    {
      id: number; // 프로젝트 목표 id
      name: string; // 프로젝트 목표 이름
    }[];
    tag: // 프로젝트 선호 협업 성향
    {
      id: number; // 선호 협업 성향 id
      name: string; // 선호 협업 성향 이름
    }[];
    field: // 프로젝트 분야
    {
      id: number; // 프로젝트 분야 id
      name: string; // 프로젝트 분야 이름
    }[];
  };
}

export interface SearchProjectInput {
  periodId: number; // 선택한 기간 id
  positionId: number; // 선택한 협업 포지션 id
  goalId: number; // 선택한 목표 id
  tagId: number[]; // 선택한 협업 성향 id
  fieldId: number[]; // 선택한 관심 프로젝트 id
  count: number; // 한 번(한 페이지)에 받을 프로젝트 개수
  page: number; // 받을 페이지 번호 (1부터 시작)
}

export interface SearchProjectOutput {
  projectCard: {
    id: number; // 프로젝트 id
    title: string; // 프로젝트 제목
    intro: string; // 프로젝트 한줄소개
    photo: string; // 프로젝트 사진
    startDate: string; // 프로젝트 시작 날짜
    endDate: string; // 프로젝트 마감 날짜
    isClosed: boolean; // 프로젝트 모집 완료 여부
    position: // 프로젝트 협업 포지션
    {
      id: number; // 프로젝트 협업 포지션 id
      name: string; // 프로젝트 협업 포지션 이름
      num: string; // 프로젝트 협업 포지션 모집 인원
    }[];
    user: {
      // 프로젝트를 만든 유저
      id: number; // 프로젝트를 만든 유저 id
      name: string; // 프로젝트를 만든 유저 이름
      photo: string; // 프로젝트를 만든 유저 사진 url
    };
  }[];
}

export interface ProjectDetail {
  project: {
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
  };
}
