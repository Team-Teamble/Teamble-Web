export interface MemberAPI {
  getFilterMetadata(): Promise<GetFilterMetadataOutput>;
  searchMembers(data: SearchMembersInput): Promise<SearchMembersOutput>;
}

export interface GetFilterMetadataOutput {
  member: {
    // 메타 데이터
    position: // 협업 포지션
    {
      id: number; // 협업 포지션 id
      name: string; // 협업 포지션 이름
    }[];
    tag: // 협업 성향 태그
    {
      id: number; // 협업 성향 태그 id
      name: string; // 협업 성향 태그 이름
    }[];
    field: // 관심 프로젝트
    {
      id: number; // 관심 프로젝트 id
      name: string; // 관심 프로젝트 이름
    }[];
  };
}

export interface SearchMembersInput {
  positionId: number; // 선택한 협업 포지션 id
  tagId: number[]; // 선택한 협업 성향 태그 id
  fieldId: number[]; // 선택한 관심 프로젝트 id
  count: number; // 한 번(한 페이지)에 받을 프로젝트 개수
  page: number; // 받을 페이지 번호 (1부터 시작)
}

export interface SearchMembersOutput {
  member: // 팀원들
  {
    id: number; // 유저 id
    name: string; // 유저 이름
    photo: string; // 유저 프로필 사진 url
    position: // 유저 포지션 (최대 2개)
    {
      id: number; // 유저 포지션 id
      name: string; // 유저 포지션 이름
    }[];
    type: {
      // 유저 협업 성향
      id: number;
      name: string;
    };
    tag: // 유저 협업 성향 태그
    {
      id: number; // 유저 협업 성향 태그 id
      name: string; // 유저 협업 성향 태그 이름
    }[];
    field: // 유저 관심 프로젝트 분야 (최대 3개)
    {
      id: number; // 유저 관심 프로젝트 분야 id
      name: string; // 유저 관심 프로젝트 분야 이름
    }[];
  }[];
}
