import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { SearchProject as Main } from "../../components/template/searchProjectView/SearchProject";
import { SingleDropDown as Single } from "../../components/molecule/drop-down/SingleDropDown";
import { FilterGroupDropDown as Group } from "../../components/molecule/drop-down/FilterGroupDropDown";
import { ProfileCard } from "../../components/molecule/profileCard/ProfileCard";
import Link from "next/link";
import useInfinityScroll from "../../utils/hook/useInfinityScroll";
import { useAPI, useAPILegacy } from "../../utils/hook/api";
import { useQuery } from "react-query";

export interface SearchMemberProps {
  memberMetadata: MemberMeta;
}

export default function SearchMemberWrapper() {
  const getFilterMetadata = useAPI((api) => api.member.getFilterMetadata);
  const { isLoading, data } = useQuery("member.getFilterMetadata", () => getFilterMetadata.request());

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  return <SearchMember memberMetadata={data.member} />;
}

export function SearchMember(props: SearchMemberProps) {
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
          title="?????? ??????"
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

interface MemberInfo {
  // ?????????
  memberCard: {
    id: number; // ?????? id
    name: string; // ?????? ??????
    photo: string; // ?????? ????????? ?????? url
    position: string[]; // ?????? ????????? ?????? (?????? 2???)
    type: string; // ?????? ?????? ?????? ??????
    tag: string[]; // ?????? ?????? ?????? ?????? ??????
    field: string[];
  }[]; // ?????? ?????? ???????????? ?????? ?????? (?????? 3???)
}

interface MemberMeta {
  // ???????????????

  position: {
    // ?????? ?????????
    id: number; // ?????? ????????? id
    name: string; // ?????? ????????? ??????
  }[];
  tag: {
    // ?????? ?????? ??????
    id: number; // ?????? ?????? ?????? id
    name: string; // ?????? ?????? ?????? ??????
  }[];
  field: {
    // ?????? ????????????
    id: number; // ?????? ???????????? id
    name: string; // ?????? ???????????? ??????
  }[];
}

interface RequestInfo {
  positionId: number; // ????????? ?????? ????????? id
  tagId: number[]; // ????????? ?????? ?????? ?????? id (?????? 3???)
  fieldId: number[]; // ????????? ?????? ???????????? id (?????? 3???)
  count: number; // ??? ???(??? ?????????)??? ?????? ?????? ??????
  page: number; //
}
