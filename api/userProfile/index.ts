export interface UserProfileAPI {
  getProfileById(userId: number): Promise<GetUserProfileByIdOutput>;
  getMetadata(): Promise<GetMetadataOutput>;
  updateProfile(userId: number): Promise<UpdateProfileOutput>;
  updateProfilePicture(userId: number, data: UpdateProfilePictureInput): Promise<UpdateProfilePictureOutput>;
}

export interface GetUserProfileByIdOutput {
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
    tag: { id: number; name: string }[];
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

export interface GetMetadataOutput {
  user: {
    // 메타데이터
    position: // 협업 포지션
    {
      id: number; // 협업 포지션 id
      name: string; // 협업 포지션 이름
    }[];
    type: // 협업 성향
    {
      id: number; // 협업 성향 id
      name: string; // 협업 성향 이름
    }[];
    field: // 관심 프로젝트 분야
    {
      id: number; // 관심 프로젝트 분야 id
      name: string; // 관심 프로젝트 분야 이름
    }[];
  };
}

export interface UpdateProfileInput {
  positionId: number[]; // 유저 포지션 id (최대 2개)
  phone: string; // 유저 핸드폰 번호
  university: string; // 유저 대학교
  major: string; // 유저 전공
  area: string; // 유저 활동지역
  intro: string; // 유저 한줄 소개
  typeId: number; // 유저 협업 성향 id
  fieldId: number[]; // 유저 관심 프로젝트 분야 id (최대 3개)
  description: string; // 유저 소개글
}

export interface UpdateProfilePictureInput {
  photo: File;
}

export interface UpdateProfileOutput {
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
    };
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

export interface UpdateProfilePictureOutput {
  userPhoto: string;
}
