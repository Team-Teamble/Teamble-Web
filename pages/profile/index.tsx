import { useState } from "react";
import { withAuth } from "../../utils/ssr";
import { apiService } from "../../api";
import styled from "styled-components";
import { SearchProject as Main } from "../../components/template/searchProjectView/SearchProject";
import { SingleDropDown as Single } from "../../components/molecule/drop-down/SingleDropDown";
import { FilterGroupDropDown as Group } from "../../components/molecule/drop-down/FilterGroupDropDown";
import { ProfileCard } from "../../components/molecule/profileCard/ProfileCard";

export interface SearchMemberProps {
  searchMember: MemberInfo;
  memberMetadata: MemberMeta;
}

export default function SearchMember(props: SearchMemberProps) {
  const initial = {
    positionId: 1,
    tagId: [1],
    fieldId: [1],
    count: 1,
    page: 1,
  };
  const { searchMember, memberMetadata: meta } = props;
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(searchMember);
  const [requestInfo, setRequestInfo] = useState<RequestInfo>(initial);

  const onUpdate = (key: string, payload: number | number[]) => {
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
          position={
            <Single meta={meta.position} onChange={onUpdate} category="positionId" info={requestInfo.positionId} />
          }
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
            Array.isArray(memberInfo) ? (
              memberInfo.map((each) => <ProfileCard key={each.id} cardInfo={each} />)
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
  const [searchMember, memberMetadata] = await Promise.all([
    apiService.member.searchMembers({
      positionId: 1,
      tagId: [1],
      fieldId: [1],
      count: 1,
      page: 1,
    }),
    apiService.member.getFilterMetadata(),
  ]);

  return {
    props: {
      searchMember: searchMember.memberCard,
      memberMetadata: memberMetadata.member,
    },
  };
});

interface HandleRequestUpdate {
  <K extends keyof RequestInfo>(category: K, payload: RequestInfo[K]): void;
}
interface MemberInfo {
  memberCard: [
    {
      id: number;
      name: string;
      photo: string;
      position: string[];
      type: string;
      tag: string[];
      field: string[];
    },
  ];
}

interface MemberMeta {
  // 메타데이터
  position: {
    // 협업 포지션
    id: number; // 협업 포지션 id
    name: string; // 협업 포지션 이름
  }[];
  tag: {
    // 협업 성향 태그
    id: number; // 협업 성향 태그 id
    name: string; // 협업 성향 태그 이름
  }[];
  field: {
    // 관심 프로젝트
    id: number; // 관심 프로젝트 id
    name: string; // 관심 프로젝트 이름
  }[];
}

interface RequestInfo {
  positionId: number; // 선택한 협업 포지션 id
  tagId: number[]; // 선택한 협업 성향 태그 id (최대 3개)
  fieldId: number[]; // 선택한 관심 프로젝트 id (최대 3개)
  count: number; // 한 번(한 페이지)에 받을 팀원 개수
  page: number; //
}
