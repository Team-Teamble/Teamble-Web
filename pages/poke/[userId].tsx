import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { ProfileCard } from "../../components/molecule/profileCard/ProfileCard";
import { PokeView } from "../../components/template/pokeView/PokeView";
import { useAPI, useAPILegacy } from "../../utils/hook/api";

interface PokePageProps {
  userId: number;
  pokeUserInfo: PokeUserInfo;
  pokeProjectInfo: PokeProjectInfo;
}

export default function PokePageWrapper() {
  const router = useRouter();
  const { userId: userIdRaw } = router.query;

  const userId = tryGetNumber(userIdRaw);

  const getPokeUser = useAPI((api) => api.poke.getPokeUser);
  const getPokeProject = useAPI((api) => api.poke.getPokeProject);

  const pokeUser = useQuery(["poke.getPokeUser", userId], () => getPokeUser.request(userId ?? -1), {
    enabled: userId !== null,
    retry: 0,
  });
  const pokeProject = useQuery(["poke.getPokeProject", userId], () => getPokeProject.request(userId ?? -1), {
    enabled: userId !== null,
    retry: 0,
  });

  if (userId === null || pokeProject.isLoading || !pokeProject.data || pokeUser.isLoading || !pokeUser.data) {
    return <div>Loading</div>;
  }

  if (pokeProject.isError) {
    return <div>Error</div>;
  }

  return <PokePage userId={userId} pokeProjectInfo={pokeProject.data} pokeUserInfo={pokeUser.data} />;
}

export function PokePage(props: PokePageProps) {
  const { userId, pokeUserInfo, pokeProjectInfo } = props;

  const [pokeUserList, setPokeUserList] = useState<PokeUserInfo>(pokeUserInfo);
  const [pokeProjectList, setPokeProjectList] = useState<PokeProjectInfo>(pokeProjectInfo);

  const deleteUserPoke = useAPILegacy((api) => api.poke.deletePokeUser);
  const deleteProjectPoke = useAPILegacy((api) => api.poke.deletePokeProject);

  async function onDeleteUser(userId: number, pokingUserId: number) {
    const data = await deleteUserPoke.request({ userId: userId.toString(), pokingUserId: pokingUserId.toString() });

    if (data) {
      setPokeUserList({ ...pokeUserInfo, memberCard: data.memberCard });
    }
  }

  async function onDeleteProject(projectId: number, pokingUserId: number) {
    const data = await deleteProjectPoke.request({
      projectId: projectId.toString(),
      pokingUserId: pokingUserId.toString(),
    });
    if (data) {
      setPokeProjectList({ ...pokeProjectInfo, memberCard: data.memberCard });
    }
  }

  return (
    <PokeView
      profileCards={
        Array.isArray(pokeUserList.memberCard) ? (
          pokeUserList.memberCard.map((each) => (
            <ProfileCard
              key={each.id}
              cardInfo={each}
              isMyPage={false}
              onDelete={() => onDeleteUser(userId, each.id)}
            />
          ))
        ) : (
          <div>로딩중</div>
        )
      }
      projectCards={
        Array.isArray(pokeProjectList.memberCard) ? (
          pokeProjectList.memberCard.map((each) => (
            <ProfileCard
              key={each.id}
              cardInfo={each}
              isMyPage={false}
              onDelete={() => onDeleteProject(userId, each.id)}
            />
          ))
        ) : (
          <div>로딩중</div>
        )
      }></PokeView>
  );
}

function tryGetNumber(val: string | string[] | undefined): number | null {
  if (val !== undefined && !isNaN(+val)) {
    return +val;
  }
  return null;
}

export interface PokeUserInfo {
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

export interface PokeProjectInfo {
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
