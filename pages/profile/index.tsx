import { useCallback, useEffect, useRef, useState } from "react";
import { withAuth } from "../../utils/ssr";
import { apiService } from "../../api";
import styled from "styled-components";
import { SearchProject as Main } from "../../components/template/searchProjectView/SearchProject";
import { SingleDropDown as Single } from "../../components/molecule/drop-down/SingleDropDown";
import { FilterGroupDropDown as Group } from "../../components/molecule/drop-down/FilterGroupDropDown";
import { ProfileCard } from "../../components/molecule/profileCard/ProfileCard";
import Link from "next/link";
import useInfinityScroll from "../../utils/hook/useInfinityScroll";
import { useAPILegacy } from "../../utils/hook/api";

export interface SearchMemberProps {
  memberMetadata: MemberMeta;
}

export default function SearchMember(props: SearchMemberProps) {
  const requsetInitial = {
    positionId: 1,
    tagId: [1],
    fieldId: [1],
    count: 6,
    page: 1,
  };
  const search = useAPILegacy((api) => api.member.searchMembers);
  const { memberMetadata: meta } = props;
  const [memberInfo, setMemberInfo] = useState<MemberInfo>({ memberCard: [] });
  const [requestInfo, setRequestInfo] = useState<RequestInfo>(requsetInitial);
  const [isMoreData, setIsMoreData] = useState<boolean>(true);
  const observerRef = useRef(null);
  const isIntersected = useInfinityScroll(observerRef);

  useEffect(() => {
    if (isIntersected && isMoreData) {
      (async () => {
        try {
          const data = await search.request(requestInfo);

          if (data && data.memberCard.length > 0) {
            setMemberInfo({ memberCard: [...memberInfo.memberCard, ...data.memberCard] });
            setRequestInfo({ ...requestInfo, page: requestInfo.page + 1 });
          } else {
            setIsMoreData(false);
          }
        } catch (e) {
          throw e;
        }
      })();
    }
  }, [isIntersected, isMoreData]);

  const onUpdate = (key: string, payload: number | number[]) => {
    setRequestInfo({ ...requestInfo, [key]: payload });
  };

  const onReset = (category?: string, payload?: number[]) => {
    if (category && payload) {
      setRequestInfo({ ...requestInfo, [category]: [...payload] });
      return;
    }
    setRequestInfo(requsetInitial);
  };

  const handleSearch = async () => {
    try {
      const filtered = await search.request({ ...requestInfo, page: 1 });
      filtered ? setMemberInfo(filtered) : setMemberInfo({ memberCard: [] });
      setIsMoreData(true);
      setRequestInfo({ ...requestInfo, page: 2 });
    } catch {
      alert("err");
    }
  };

  return (
    <StyledSearchProject>
      <StyledMain>
        <Main
          onClick={handleSearch}
          title="팀원 찾기"
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
          projectCards={memberInfo.memberCard.map((each) => (
            <Link href={`/profile/${each.id}`} key={each.id} passHref>
              <ResetA>
                <ProfileCard cardInfo={each} />
              </ResetA>
            </Link>
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

const ResetA = styled.a`
  text-decoration: none;
  outline: none;
`;

export const getServerSideProps = withAuth<SearchMemberProps>(async () => {
  const [memberMetadata] = await Promise.all([apiService.member.getFilterMetadata()]);

  return {
    props: {
      memberMetadata: memberMetadata.member,
    },
  };
});

interface HandleRequestUpdate {
  <K extends keyof RequestInfo>(category: K, payload: RequestInfo[K]): void;
}
interface MemberInfo {
  // 팀원들
  memberCard: {
    id: number; // 유저 id
    name: string; // 유저 이름
    photo: string; // 유저 프로필 사진 url
    position: string[]; // 유저 포지션 이름 (최대 2개)
    type: string; // 유저 협업 성향 이름
    tag: string[]; // 유저 협업 성향 태그 이름
    field: string[];
  }[]; // 유저 관심 프로젝트 분야 이름 (최대 3개)
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
