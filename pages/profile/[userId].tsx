import { useEffect, useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../styles/color";
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
import { BadRequestError, NotFoundError } from "../../api/util/error";
import { ConfirmButton, StyledSearchBtn } from "../../components/atom/button/ConfirmButton";
import { useAPI, useAPILegacy } from "../../utils/hook/api";
import { useUser } from "../../utils/hook/user";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
interface ProfileByIdProps {
  userId: number;
  userProfileInfo: UserProfileInfo;
  userProfileMetadata: UserProfileMeta;
}

export default function ProfileByIdWrapper() {
  const router = useRouter();
  const { userId: userIdRaw } = router.query;
  const userId = tryGetNumber(userIdRaw);

  const getMetadata = useAPI((api) => api.userProfile.getMetadata);
  const getProfileById = useAPI((api) => api.userProfile.getProfileById);

  const metadata = useQuery("userProfile.getMetadata", () => getMetadata.request());
  const profile = useQuery(["userProfile.getProfileById", userId], () => getProfileById.request(userId ?? -1), {
    enabled: userId !== null,
    retry: 0,
  });

  if (userId === null || profile.isError) {
    return <div>404</div>;
  }

  if (metadata.isLoading || !metadata.data || profile.isLoading || !profile.data) {
    return <div>Loading</div>;
  }

  return <ProfileById userId={userId} userProfileMetadata={metadata.data.user} userProfileInfo={profile.data.user} />;
}

export function ProfileById(props: ProfileByIdProps) {
  const updatePicture = useAPILegacy((api) => api.userProfile.updateProfilePicture);
  const { userProfileInfo, userProfileMetadata: meta, userId } = props;

  const authedUser = useUser();
  const updateUser = useAPILegacy((api) => api.userProfile.updateProfile);

  const [userInfo, setUserInfo] = useState<UserProfileInfo>(userProfileInfo);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeType, setActiveType] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [isPoked, setIsPoked] = useState(false);
  const pokeUser = useAPILegacy((api) => api.poke.pokeUser);

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
                      ???????? ??? ????????? ??????
                    </CustomConfirmBtn>
                  ) : (
                    <CustomConfirmBtn onClick={() => handlePokingUser(authedUser?.id ?? 0, userInfo.id)}>
                      ???????? ??? ?????????
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
                  <ConfirmButton onClick={handleSubmit}>???????? ?????? ??????</ConfirmButton>
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

function tryGetNumber(val: string | string[] | undefined): number | null {
  if (val !== undefined && !isNaN(+val)) {
    return +val;
  }
  return null;
}

export interface UserProfileInfo {
  id: number; // ?????? ?????????
  name: string; // ?????? ??????
  email: string; // ?????? ?????????
  phone: string; // ?????? ????????? ??????
  photo: string; // ?????? ????????? ?????? url
  university: string; // ?????? ?????????
  major: string; // ?????? ??????
  area: string; // ?????? ????????????
  intro: string; // ?????? ?????? ??????
  description: string; // ?????? ?????????
  isDeleted: boolean; // ?????? ?????? ??????
  projectId: number | null; // ?????? ????????? ?????? ???????????? id
  type: {
    // ?????? ?????? ??????
    id: number; // ?????? ?????? ?????? id
    name: string; // ?????? ?????? ?????? ??????
  } | null;
  tag: // ?????? ?????? ?????? ??????
  {
    id: number; // ?????? ?????? ?????? ?????? id
    name: string; // ?????? ?????? ?????? ?????? ??????
  }[];
  position: // ?????? ????????? (?????? 2???)
  {
    id: number; // ?????? ????????? id
    name: string; // ?????? ????????? ??????
  }[];
  field: // ?????? ?????? ???????????? ?????? (?????? 3???)
  {
    id: number; // ?????? ?????? ???????????? ?????? id
    name: string; // ?????? ?????? ???????????? ?????? ??????
  }[];
}
export interface UserProfileMeta {
  // ???????????????
  position: // ?????? ?????????
  {
    id: number; // ?????? ????????? id
    name: string; // ?????? ????????? ??????
  }[];
  type: // ?????? ??????
  {
    id: number; // ?????? ?????? id
    name: string; // ?????? ?????? ??????
  }[];
  field: // ?????? ???????????? ??????
  {
    id: number; // ?????? ???????????? ?????? id
    name: string; // ?????? ???????????? ?????? ??????
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
