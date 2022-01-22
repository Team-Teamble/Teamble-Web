import React, { useEffect, useRef, useState } from "react";
import { withAuth } from "../utils/ssr";
import { apiService } from "../api";
import styled from "styled-components";
import { Intro } from "../components/organism/makeProjectView/Intro";
import { Period } from "../components/organism/makeProjectView/Period";
import { RecruitPosition as Position } from "../components/organism/makeProjectView/recruitPosition/RecruitPosition";
import { PositionDropDown } from "../components/molecule/drop-down/PositionDropDown";
import { Goal } from "../components/organism/makeProjectView/Goal";
import { Tag } from "../components/organism/makeProjectView/Tag";
import { Field } from "../components/organism/makeProjectView/Field";
import { Area } from "../components/organism/makeProjectView/Area";
import { DateRangeInput, START_DATE } from "@datepicker-react/styled";
import { OnDatesChangeProps } from "@datepicker-react/styled";
import { DocumentEditor, DocumentEditorRef } from "../components/molecule/document/DocumentEditor";
import { TeamMembers } from "../components/organism/makeProjectView/TeamMembers";
import { UserInfo } from "../states/auth";
import { formatISO } from "date-fns";
import { ConfirmButton } from "../components/atom/button/ConfirmButton";
import { teambleColors } from "../styles/color";
import { AddMemberModal } from "../components/molecule/modal/AddMemberModal";
import { useAPI } from "../utils/hook/api";
import { useRouter } from "next/router";
import { BadRequestError, NotFoundError } from "../api/util/error";
export interface CreateProjectProps {
  className?: string;
  createProjectMetadata: CreateProjectMeta;
  user: UserInfo;
}

export default function CreateProject(props: CreateProjectProps) {
  const addMember = useAPI((api) => api.project.addMemberToProject);
  const createProject = useAPI((api) => api.project.createProject);
  const addPicture = useAPI((api) => api.project.addPictureToProject);

  const { createProjectMetadata: meta, className, user } = props;
  const editorRef = useRef<DocumentEditorRef>(null);

  const initial: RequestInfo = {
    userId: user.id, // 로그인된 유저 id
    title: "", // 프로젝트 제목
    intro: "", // 프로젝트 한줄 소개
    periodId: NaN, // 프로젝트 예상 기간 id
    // 첫 번째 number: 프로젝트 모집 포지션 id
    // 두 번째 number: 프로젝트 모집 포지션 인원 id
    position: [
      [meta.position[0].id, 1],
      [meta.position[1].id, 1],
      [meta.position[2].id, 1],
    ], // 프로젝트 모집 포지션
    goalId: NaN, // 프로젝트 목표 id
    tagId: [], // 프로젝트 선호 협업 성향 id
    fieldId: [], // 프로젝트 분야 id
    area: "", // 프로젝트 지역
    startDate: "", // 프로젝트 모집 시작 날짜
    endDate: "", // 프로젝트 모집 마감 날짜
    description: "", // 프로젝트 내용
    memberId: [user.id], // 프로젝트 팀 구성원
  };

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [requestInfo, setRequestInfo] = useState<RequestInfo>(initial);
  const [membersInfo, setMembersInfo] = useState([{ id: user.id, name: user.name, photo: user.profilePic }]);
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [createErr, setCreateErr] = useState<string>("");
  const [addMemberErr, setAddMemberErr] = useState<string>("");
  const [fileInfo, setFileInfo] = useState<{ photo: File | null; url: string }>({
    photo: null,
    url: "",
  });
  const [datesInfo, setDatesInfo] = useState<OnDatesChangeProps>({
    startDate: null,
    endDate: null,
    focusedInput: null,
  });
  const router = useRouter();

  const onUpdate: HandleRequestUpdate = (key, payload) => {
    setRequestInfo({ ...requestInfo, [key]: payload });
  };
  console.log(requestInfo.position);
  function onUpload(name: { photo: File | null; url: string }) {
    setFileInfo(name);
  }

  function handleDatesChange(data: OnDatesChangeProps) {
    if (!data.focusedInput) {
      setDatesInfo({ ...data, focusedInput: START_DATE });
      data.endDate && onUpdate("endDate", formatISO(data.endDate));
    } else {
      setDatesInfo(data);
      data.startDate && onUpdate("startDate", formatISO(data.startDate));
    }
  }

  function handleOpen() {
    setIsModalOpened((state) => !state);
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setMemberEmail(e.target.value);
  }

  function handleDeleteMember(id: number) {
    const newMembers = membersInfo.filter((member) => member.id !== id);
    setMembersInfo(newMembers);
  }

  async function handleAddMember() {
    try {
      const newMemberInfo = await addMember.request({ email: memberEmail });
      if (newMemberInfo) {
        setMembersInfo([...membersInfo, newMemberInfo.member]);
        setRequestInfo(initial);
        setAddMemberErr("");
        onUpdate("memberId", [...requestInfo.memberId, newMemberInfo.member.id]);
      }
    } catch (e) {
      if (e instanceof NotFoundError || e instanceof BadRequestError) {
        setAddMemberErr(e.message);
      } else {
        throw e;
      }
    }
  }

  async function handleCreateProject() {
    try {
      const data = await createProject.request(requestInfo);
      if (data) {
        await handlePicture(data.project.id);
      }
      router.push(`/project/${data?.project.id}`);
    } catch (e) {
      if (e instanceof NotFoundError || e instanceof BadRequestError) {
        setCreateErr(e.message);
      } else {
        throw e;
      }
    }
  }
  async function handlePicture(id: number) {
    if (fileInfo.photo) {
      try {
        await addPicture.request(id, { photo: fileInfo.photo });
      } catch (e) {
        throw e;
      }
    }
  }
  const addMemberModal = isModalOpened ? (
    <AddMemberModal
      onChange={handleEmail}
      value={memberEmail}
      onClick={handleAddMember}
      onOpen={handleOpen}
      error={addMemberErr}
    />
  ) : null;

  useEffect(() => {
    editorRef.current?.setMarkdown(".");
  }, []);

  return (
    <StyledSearchProject className={className}>
      <StyledLayout>
        <Intro onChange={onUpdate} requestInfo={requestInfo} onUpload={onUpload} fileInfo={fileInfo} />
        <StyledPeriodSlot>
          <Period meta={meta?.period} selectedId={requestInfo.periodId} onClick={onUpdate} />
        </StyledPeriodSlot>
        <StyledPositionSlot>
          <Position
            dropDown={meta.position.map((each, i) => (
              <PositionDropDown
                key={each.id}
                requestInfo={requestInfo.position}
                index={i}
                meta={each}
                onClick={onUpdate}
              />
            ))}
          />
        </StyledPositionSlot>
        <StyledGoalSlot>
          <Goal meta={meta?.goal} selectedId={requestInfo.goalId} onClick={onUpdate} />
        </StyledGoalSlot>
        <StyledTagSlot>
          <Tag meta={meta?.tag} selectedId={requestInfo.tagId} onClick={onUpdate} />
        </StyledTagSlot>
        <StyledFieldSlot>
          <Field meta={meta?.field} selectedId={requestInfo.fieldId} onClick={onUpdate} />
        </StyledFieldSlot>
        <StyledAreaSlot>
          <Area value={requestInfo.area} onChange={onUpdate} />
        </StyledAreaSlot>
        <StyledDateSlot>
          <div>모집 기간</div>
          <DateRangeInput
            onDatesChange={handleDatesChange}
            onFocusChange={(focusedInput) => setDatesInfo({ ...datesInfo, focusedInput })}
            startDate={datesInfo.startDate}
            endDate={datesInfo.endDate}
            focusedInput={datesInfo.focusedInput}
          />
        </StyledDateSlot>
        <StyledEditorSlot>
          <DocumentEditor ref={editorRef} onChange={(val) => onUpdate("description", val)} />
        </StyledEditorSlot>
        <StyledMembersSlot>
          <TeamMembers
            myId={user.id}
            membersInfo={membersInfo}
            onClick={handleOpen}
            addMemberModal={addMemberModal}
            onDelete={handleDeleteMember}
          />
        </StyledMembersSlot>
        <StyledButtonSlot>
          <div>
            {<div>{createErr}</div>}
            <StyledCreateButton onClick={handleCreateProject}>생성하기</StyledCreateButton>
          </div>
        </StyledButtonSlot>
      </StyledLayout>
    </StyledSearchProject>
  );
}

const StyledSearchProject = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 71.2em;
`;
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1200px;
  padding-top: 125px;
`;
const StyledPeriodSlot = styled.div`
  margin-top: 26.2em;
`;
const StyledPositionSlot = styled.div`
  margin-top: 8em;
`;
const StyledGoalSlot = styled.div`
  margin-top: 8em;
`;
const StyledTagSlot = styled.div`
  margin-top: 8em;
`;
const StyledFieldSlot = styled.div`
  margin-top: 8em;
`;
const StyledAreaSlot = styled.div`
  margin-top: 8em;
`;
const StyledDateSlot = styled.div`
  margin-top: 8em;
  & > div {
    z-index: 99;
  }
  & > div:first-child {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
  }
  & > div:last-child {
    padding-top: 53px;
  }
`;
const StyledEditorSlot = styled.div`
  margin-top: 8em;
`;
const StyledMembersSlot = styled.div`
  margin-top: 8em;
`;
const StyledButtonSlot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 75px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      color: ${teambleColors.red};
      font-size: 1rem;
      height: 2rem;
    }
  }
`;
const StyledCreateButton = styled(ConfirmButton)`
  width: 162px;
  height: 54px;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${teambleColors.deepPurple};
`;
export const getServerSideProps = withAuth<CreateProjectProps>(async (context, auth) => {
  const { project } = await apiService.project.getProjectMetadata();

  if (!auth.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else if (auth.user.currentProjectId) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        user: auth.user,
        createProjectMetadata: project,
      },
    };
  }
});

interface HandleRequestUpdate {
  <K extends keyof RequestInfo>(category: K, payload: RequestInfo[K]): void;
}

interface CreateProjectMeta {
  // 프로젝트
  period: {
    // 프로젝트 기간
    id: number; // 프로젝트 기간 id
    name: string; // 프로젝트 예상 기간 이름
  }[];
  position: {
    // 프로젝트 모집 포지션
    id: number; // 프로젝트 모집 포지션 id
    name: string; // 프로젝트 모집 포지션 이름
    positionNum: {
      // 프로젝트 모집 인원
      id: number; // 프로젝트 모집 포지션 인원 id
      name: string; // 프로젝트 모집 포지션 인원 이름
    }[];
  }[];
  goal: {
    // 프로젝트 목표
    id: number; // 프로젝트 목표 id
    name: string; // 프로젝트 목표 이름
  }[];
  tag: {
    // 프로젝트 선호 협업 성향
    id: number; // 프로젝트 선호 협업 성향 id
    name: string; // 프로젝트 선호 협업 성향 이름
  }[];
  field: {
    // 프로젝트 분야
    id: number; // 프로젝트 분야 id
    name: string; // 프로젝트 분야 이름
  }[];
}

interface RequestInfo {
  userId: number; // 로그인된 유저 id
  title: string; // 프로젝트 제목
  intro: string; // 프로젝트 한줄 소개
  periodId: number; // 프로젝트 예상 기간 id
  // 첫 번째 number: 프로젝트 모집 포지션 id
  // 두 번째 number: 프로젝트 모집 포지션 인원 id
  position: number[][]; // 프로젝트 모집 포지션
  goalId: number; // 프로젝트 목표 id
  tagId: number[]; // 프로젝트 선호 협업 성향 id
  fieldId: number[]; // 프로젝트 분야 id
  area: string; // 프로젝트 지역
  startDate: string; // 프로젝트 모집 시작 날짜
  endDate: string; // 프로젝트 모집 마감 날짜
  description: string; // 프로젝트 내용
  memberId: number[]; // 프로젝트 팀 구성원
}
