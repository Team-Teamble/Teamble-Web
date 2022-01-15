export interface LandingAPI {
  topProjects(): Promise<TopProjectsOutput>;
}

export interface TopProjectsOutput {
  topProject: {
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
  }[];
}
