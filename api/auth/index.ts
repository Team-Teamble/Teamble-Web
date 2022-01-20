export interface AuthAPI {
  login(data: LoginInput): Promise<LoginOutput>;
  verify(): Promise<VerifyOutput>;
  register(data: RegisterInput): Promise<RegisterOutput>;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  accesstoken: string;
  user: {
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
    tag: // 유저 협업 성향 태그
    {
      id: number; // 유저 협업 성향 태그 id
      name: string; // 유저 협업 성향 태그 이름
    }[];
    position: // 유저 포지션 (최대 2개)
    {
      id: number; // 유저 포지션 id
      name: string; // 유저 포지션 이름
    }[];
    field: // 유저 관심 프로젝트 분야 (최대 3개)
    {
      id: number; // 유저 관심 프로젝트 분야 id
      name: string; // 유저 관심 프로젝트 분야 이름
    }[];
  };
}

export interface VerifyOutput {
  user: {
    id: number; // 유저 아이디
    idFirebase: string; // 유저 uid
    name: string; // 유저 이름
    email: string; // 유저 이메일
    phone: string | null; // 유저 핸드폰 번호
    photo: string; // 유저 프로필 사진 url
    university: string | null; // 유저 대학교
    major: string | null; // 유저 전공
    area: string | null; // 유저 활동지역
    intro: string | null; // 유저 한줄 소개
    description: string | null; // 유저 소개글
    isChecked: boolean; // 유저 알림 확인 여부
    createdAt: string; // 유저 생성 날짜
    updatedAt: string; // 유저 업데이트 날짜
    isDeleted: boolean; // 유저 삭제 여부
    projectId: number | null; // 해당 유저가 만든 프로젝트 id
    type: {
      // 유저 협업 성향
      id: number;
      name: string;
    } | null;
    tag:
      | {
          id: number; // 유저 협업 성향 태그 id
          name: string; // 유저 협업 성향 태그 이름
        }[]
      | null;
    position:
      | {
          id: number; // 유저 포지션 id
          name: string; // 유저 포지션 이름
        }[]
      | null;
    field:
      | {
          id: number; // 유저 관심 프로젝트 분야 id
          name: string; // 유저 관심 프로젝트 분야 이름
        }[]
      | null;
  };
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface RegisterOutput {
  user: {
    id: number; // 유저 아이디
    idFirebase: string; // 유저 uid
    name: string; // 유저 이름
    email: string; // 유저 이메일
    photo: string; // 유저 프로필 사진 url
    isChecked: boolean; // 유저 알림 확인 여부
    createdAt: string; // 유저 생성 날짜
    updatedAt: string; // 유저 업데이트 날짜
    isDeleted: boolean; // 유저 삭제 여부
    projectId: number | null; // 해당 유저가 만든 프로젝트 id
  };
  accesstoken: string; // 유저 토큰
}
