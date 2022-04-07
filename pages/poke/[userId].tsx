import { useState } from "react";
import { apiService } from "../../api";
import { ProfileCard } from "../../components/molecule/profileCard/ProfileCard";
import { PokeView } from "../../components/template/pokeView/PokeView";
import { useAPILegacy } from "../../utils/hook/api";
import { withAuth } from "../../utils/ssr";

interface PokePageProps {
  userId: number;
  pokeUserInfo: PokeUserInfo;
  pokeProjectInfo: PokeProjectInfo;
}

export default function PokePage(props: PokePageProps) {
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

export const getServerSideProps = withAuth<PokePageProps>(async (context) => {
  const userIdRaw = context.query.userId;
  const userId = tryGetNumber(userIdRaw);

  if (userId === null) {
    return {
      notFound: true,
    };
  }

  const [pokeUserInfo, pokeProjectInfo] = await Promise.all([
    apiService.poke.getPokeUser(userId),
    apiService.poke.getPokeProject(userId),
  ]);

  return {
    props: {
      userId,
      pokeUserInfo: pokeUserInfo,
      pokeProjectInfo: pokeProjectInfo,
    },
  };
});

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
