import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiService } from "../../api";
import { teambleColors } from "../../styles/color";
import { withAuth } from "../../utils/ssr";
import { MyPageMain } from "../../components/template/myPageView/MyPageMain";
import { MyPageMainEditing } from "../../components/template/myPageView/MyPageViewEditing";
import { ProfileBox } from "../../components/organism/myPageView/ProfileBox";
import { Tendencies } from "../../components/molecule/myPageView/Tendencies";
import { ProfileBoxEditing } from "../../components/organism/myPageView/ProfileBoxEditing";
import { IntroInput } from "../../components/atom/Input/IntroInput";
import { Fields } from "../../components/molecule/myPageView/Fields";
import { FieldsEditing } from "../../components/molecule/myPageView/FieldsEditing";
import { DocumentViewer } from "../../components/molecule/document/DocumentViewer";
import { DocumentEditor } from "../../components/molecule/document/DocumentEditor";
import { ProfileEditButton } from "../../components/atom/button/ProfileEditButton";
import { useUser } from "../../utils/hook/auth";
import { useAPI } from "../../utils/hook/api";
import { BadRequestError, NotFoundError } from "../../api/util/error";
import { ConfirmButton, StyledSearchBtn } from "../../components/atom/button/ConfirmButton";
interface ProfileByIdProps {
  userId: number;
  userProfileInfo: UserProfileInfo;
  userProfileMetadata: UserProfileMeta;
}

export default function ProfileById(props: ProfileByIdProps) {
  const updatePicture = useAPI((api) => api.userProfile.updateProfilePicture);
  const { userProfileInfo, userProfileMetadata: meta, userId } = props;

  const authedUser = useUser();
  const updateUser = useAPI((api) => api.userProfile.updateProfile);

  const [userInfo, setUserInfo] = useState<UserProfileInfo>(userProfileInfo);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeType, setActiveType] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [isPoked, setIsPoked] = useState(false);
  const pokeUser = useAPI((api) => api.poke.pokeUser);

  useEffect(() => {
    setUserInfo(userProfileInfo);
  }, [userProfileInfo]);

  function onEdit() {
    setIsEditing((state) => !state);
  }
  const handleUpdate: HandleUpdate = (category, payload) => {
    setUserInfo({ ...userInfo, [category]: payload });
  };

  async function handleUpdatePicture(file: File) {
    try {
      const data = await updatePicture.request(userId, { photo: file });
      if (data) {
        handleUpdate("photo", data.userPhoto);
      }
    } catch (e) {
      throw e;
    }
  }

  async function handlePokingUser(userPokingId: number, userPokedId: number) {
    setIsPoked(() => true);
    try {
      await pokeUser.request({ userPokingId: userPokingId, userPokedId: userPokedId });
    } catch (e) {
      throw e;
    }
  }

  async function handleSubmit() {
    if (authedUser && userInfo.type) {
      try {
        const updated = await updateUser.request(authedUser.id, {
          area: userInfo.area,
          description: userInfo.description,
          fieldId: userInfo.field.map((v) => v.id),
          intro: userInfo.intro,
          major: userInfo.major,
          phone: userInfo.phone,
          positionId: userInfo.position.map((v) => v.id),
          typeId: userInfo.type.id,
          university: userInfo.university,
        });
        if (updated) {
          setUserInfo(updated.user);
        }
        setIsEditing(false);
        setError("");
      } catch (e) {
        if (e instanceof NotFoundError || e instanceof BadRequestError) {
          setError(e.message);
        } else {
          throw e;
        }
      }
    }
  }

  function onActiveType(selectedId: number): void {
    setActiveType(selectedId);
  }

  const profileEditControlBox = authedUser?.id === userInfo.id ? <ProfileEditButton onEdit={onEdit} /> : null;

  return (
    <StyledProfileById>
      <StyledBg src="/profile/ic_profile_default.png" alt="default_bg" />
      <StyledMain>
        {!isEditing ? (
          <MyPageMain
            intro={userInfo.intro}
            profileBox={<ProfileBox user={userInfo} editControl={profileEditControlBox} />}
            tendencies={<Tendencies user={userInfo} metaType={meta.type} isEditing={false} />}
            fields={<Fields field={userInfo.field} />}
            viewer={<DocumentViewer value={userInfo.description} />}
            submit={
              <div>
                {authedUser && authedUser.id !== userId ? (
                  isPoked ? (
                    <CustomConfirmBtn onClick={() => handlePokingUser(authedUser?.id ?? 0, userInfo.id)}>
                      👍🏻 콕 찌르기 완료
                    </CustomConfirmBtn>
                  ) : (
                    <CustomConfirmBtn onClick={() => handlePokingUser(authedUser?.id ?? 0, userInfo.id)}>
                      👈🏻 콕 찌르기
                    </CustomConfirmBtn>
                  )
                ) : null}
                {error && <p>{error}</p>}
              </div>
            }
          />
        ) : (
          <MyPageMainEditing
            introInput={<IntroInput intro={userInfo.intro} onChange={handleUpdate} />}
            profileBoxEditing={
              <ProfileBoxEditing
                user={userInfo}
                onChange={handleUpdate}
                metaPosition={meta.position}
                onClick={handleUpdatePicture}
              />
            }
            tendencies={
              <Tendencies
                user={userInfo}
                metaType={meta.type}
                isEditing={true}
                onClick={onActiveType}
                onUpdate={handleUpdate}
                selectedTypeId={activeType}
              />
            }
            fields={<FieldsEditing field={userInfo.field} metaField={meta.field} onChange={handleUpdate} />}
            editor={<DocumentEditor onChange={(val) => handleUpdate("description", val)} />}
            submit={
              <StyledConfirmWrapper>
                <div>
                  <span>{error}</span>
                  <ConfirmButton onClick={handleSubmit}>👍🏻 수정 완료</ConfirmButton>
                </div>
              </StyledConfirmWrapper>
            }
          />
        )}
      </StyledMain>
    </StyledProfileById>
  );
}
const StyledConfirmWrapper = styled.div`
  margin-top: 6.3em;
  display: flex;
  justify-content: flex-end;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > div > span {
    color: ${teambleColors.red};
    margin-bottom: 1.3em;
  }
  button {
    font-size: 18px;
    padding: 0 2em;
  }
`;
export const getServerSideProps = withAuth<ProfileByIdProps>(async (context) => {
  const userIdRaw = context.query.userId;
  const userId = tryGetNumber(userIdRaw);

  if (userId === null) {
    return {
      notFound: true,
    };
  }

  const [userProfileInfo, userProfileMetadata] = await Promise.all([
    apiService.userProfile.getProfileById(userId),
    apiService.userProfile.getMetadata(),
  ]);

  return {
    props: {
      userId,
      userProfileInfo: userProfileInfo.user,
      userProfileMetadata: userProfileMetadata.user,
    },
  };
});

function tryGetNumber(val: string | string[] | undefined): number | null {
  if (val !== undefined && !isNaN(+val)) {
    return +val;
  }
  return null;
}

export interface UserProfileInfo {
  id: number; // 유저 아이디
  name: string; // 유저 이름
  email: string; // 유저 이메일
  phone: string; // 유저 핸드폰 번호
  photo: string; // 유저 프로필 사진 url
  university: string; // 유저 대학교
  major: string; // 유저 전공
  area: string; // 유저 활동지역
  intro: string; // 유저 한줄 소개
  description: string; // 유저 소개글
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
}
export interface UserProfileMeta {
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
}

export interface HandleUpdate {
  <K extends keyof UserProfileInfo>(category: K, payload: UserProfileInfo[K]): void;
}

const StyledProfileById = styled.div`
  width: 100%;
  flex-grow: 1;
`;
const StyledBg = styled.img`
  width: 100%;
  height: 36.4em;
`;
const StyledMain = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 13.7em;
  display: flex;
  justify-content: center;
`;

const CustomConfirmBtn = styled(StyledSearchBtn)`
  margin-top: 1rem;
  font-size: 15px;
  padding: 0.7rem 2rem;
`;
