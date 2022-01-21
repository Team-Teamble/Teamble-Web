export interface PokeAPI {
  pokeUser(data: PokingUser): Promise<PokeUser>;
  pokeProject(data: PokingProject): Promise<PokeProject>;
  getPokeUser(userId: number): Promise<GetPokeUser>;
  getPokeProject(userId: number): Promise<GetPokeProject>;
  deletePokeUser(data: UserPokeDelete): Promise<DeletePokeUser>;
  deletePokeProject(data: ProjectPokeDelete): Promise<DeletePokeProject>;
}

export interface PokeUser {
  user: {
    // 콕 찌른(로그인 한) 유저 정보
    id: number; // 유저 아이디
    idFirebase: string; // 유저 uid
    name: string; // 유저 이름
    email: string; // 유저 이메일
    phone: string; // 유저 핸드폰 번호
    photo: string; // 유저 프로필 사진 url
    university: string; // 유저 대학교
    major: string; // 유저 전공
    area: string; // 유저 활동지역
    intro: string; // 유저 한줄 소개
    description: string; // 유저 소개글
    isChecked: boolean; // 유저 알림 확인 여부
    createdAt: string; // 유저 생성 날짜
    updatedAt: string; // 유저 업데이트 날짜
    isDeleted: boolean; // 유저 삭제 여부
    projectId: number | null; // 해당 유저가 만든 프로젝트 id
    type: {
      // 유저 협업 성향
      id: number; // 유저 협업 성향 id
      name: string; // 유저 협업 성향 이름
    } | null;
    tag: {
      // 유저 협업 성향 태그
      id: number; // 유저 협업 성향 태그 id
      name: string; // 유저 협업 성향 태그 이름
    }[];
    position: {
      // 유저 포지션 (최대 2개)
      id: number; // 유저 포지션 id
      name: string; // 유저 포지션 이름
    }[];
    field: {
      // 유저 관심 프로젝트 분야 (최대 3개)
      id: number; // 유저 관심 프로젝트 분야 id
      name: string; // 유저 관심 프로젝트 분야 이름
    }[];
  };
}

export interface PokeProject {
  user: {
    // 지원한(로그인 한) 유저
    id: number; // 유저 아이디
    idFirebase: string; // 유저 uid
    name: string; // 유저 이름
    email: string; // 유저 이메일
    phone: string; // 유저 핸드폰 번호
    photo: string; // 유저 프로필 사진 url
    university: string; // 유저 대학교
    major: string; // 유저 전공
    area: string; // 유저 활동지역
    intro: string; // 유저 한줄 소개
    description: string; // 유저 소개글
    isChecked: boolean; // 유저 알림 확인 여부
    createdAt: string; // 유저 생성 날짜
    updatedAt: string; // 유저 업데이트 날짜
    isClosed: boolean; // 프로젝트 모집 종료 여부
    isDeleted: boolean; // 유저 삭제 여부
    projectId: number | null; // 해당 유저가 만든 프로젝트 id
    type: {
      // 유저 협업 성향
      id: number; // 유저 협업 성향 id
      name: string; // 유저 협업 성향 이름
    } | null;
    tag: {
      // 유저 협업 성향 태그
      id: number; // 유저 협업 성향 태그 id
      name: string; // 유저 협업 성향 태그 이름
    }[];
    position: {
      // 유저 포지션 (최대 2개)
      id: number; // 유저 포지션 id
      name: string; // 유저 포지션 이름
    }[];
    field: {
      // 유저 관심 프로젝트 분야 (최대 3개)
      id: number; // 유저 관심 프로젝트 분야 id
      name: string; // 유저 관심 프로젝트 분야 이름
    }[];
  };
}

export interface GetPokeUser {
  user: {
    // 로그인한 유저
    id: number; // 로그인한 유저 id
    isChecked: boolean; // 유저 알림 확인 여부
  };
  memberCard: {
    // 나를 찔러본 사람들
    id: number; // 유저 id
    name: string; // 유저 이름
    photo: string; // 유저 프로필 사진 url
    position: string[]; // 유저 포지션 이름 (최대 2개)
    type: string; // 유저 협업 성향 이름
    tag: string[]; // 유저 협업 성향 태그 이름
    field: string[]; // 유저 관심 프로젝트 분야 이름 (최대 3개)
  }[];
}

export interface GetPokeProject {
  user: {
    // 로그인한 유저
    id: number; // 로그인한 유저 id
    isChecked: boolean; // 유저 알림 확인 여부
  };
  memberCard: {
    // 내 프로젝트에 지원한 사람
    id: number; // 유저 id
    name: string; // 유저 이름
    photo: string; // 유저 프로필 사진 url
    position: string[]; // 유저 포지션 이름 (최대 2개)
    type: string; // 유저 협업 성향 이름
    tag: string[]; // 유저 협업 성향 태그 이름
    field: string[]; // 유저 관심 프로젝트 분야 이름 (최대 3개)
  }[];
}

export interface DeletePokeUser {
  memberCard: {
    // 삭제 후 나를 찔러본 사람들
    id: number; // 유저 id
    name: string; // 유저 이름
    photo: string; // 유저 프로필 사진 url
    position: string[]; // 유저 포지션 이름 (최대 2개)
    type: string; // 유저 협업 성향 이름
    tag: string[]; // 유저 협업 성향 태그 이름
    field: string[]; // 유저 관심 프로젝트 분야 이름 (최대 3개)
  }[];
}

export interface DeletePokeProject {
  memberCard: {
    // 삭제 후 내 프로젝트에 지원한 사람들
    id: number; // 유저 id
    name: string; // 유저 이름
    photo: string; // 유저 프로필 사진 url
    position: string[]; // 유저 포지션 이름 (최대 2개)
    type: string; // 유저 협업 성향 이름
    tag: string[]; // 유저 협업 성향 태그 이름
    field: string[]; // 유저 관심 프로젝트 분야 이름 (최대 3개)
  }[];
}

export interface UserPokeDelete {
  userId: string;
  pokingUserId: string;
}

export interface ProjectPokeDelete {
  projectId: string;
  pokingUserId: string;
}

export interface PokingUser {
  userPokingId: number; // 콕 찌르는 유저 id
  userPokedId: number; // 콕 찔린 유저 id
}

export interface PokingProject {
  projectId: number;
  userId: number;
}
