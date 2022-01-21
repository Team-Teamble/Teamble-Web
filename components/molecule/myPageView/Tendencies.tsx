import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { MyPageTag } from "../../atom/tag/MyPageTag";
import { ProfileTestButton } from "../../atom/button/ProfileTestButton";
import Link from "next/link";
export interface TendenciesProps {
  className?: string;
  selectedTypeId?: number | null;
  onClick?(selectedTypeId: number): void;
  onUpdate?(key: "type", payload: { id: number; name: string }): void;
  metaType: { id: number; name: string }[];
  user: UserInfo;
  isEditing: boolean;
}
interface UserInfo {
  name: string;
  type: { id: number; name: string } | null;
  tag: { id: number; name: string }[];
}
export function Tendencies(props: TendenciesProps) {
  const { isEditing, metaType, selectedTypeId, onClick: onActiveType, onUpdate, user, className } = props;

  function handleClick(id: number, payload: { id: number; name: string }) {
    onActiveType && onActiveType(id);
    onUpdate && onUpdate("type", payload);
  }

  return (
    <StyledTendencies className={className}>
      <StyledTypeWrapper>
        <StyledTitle isEditing={isEditing}>
          <div>{user.name} 님의</div>
          <div>협업 성향은</div>
        </StyledTitle>
        {isEditing ? (
          <StyledEditingTypes>
            {metaType.map(({ id, name }) => (
              <MyPageTag
                key={id}
                isActive={selectedTypeId === id}
                onClick={() => handleClick(id, { id, name })}
                size="big">
                {name}
              </MyPageTag>
            ))}
          </StyledEditingTypes>
        ) : user.type ? (
          <StyledType>{user.type.name}</StyledType>
        ) : (
          <StyledUnderLine />
        )}
      </StyledTypeWrapper>
      {!isEditing ? (
        <StyledTags>
          {user.tag.map(({ id, name }) => (
            <MyPageTag key={id} isActive={true} size="small">
              {name}
            </MyPageTag>
          ))}
        </StyledTags>
      ) : (
        <StyledTypeTestWrapper>
          <div>
            <span>아직 테스트를 하지 않으셨나요?</span>
            <Link href="/tendency" passHref>
              <ProfileTestButton href="/tendency" />
            </Link>
          </div>
        </StyledTypeTestWrapper>
      )}
    </StyledTendencies>
  );
}

const StyledTendencies = styled.div`
  width: 100%;
`;
const StyledTypeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 70px;
`;
const StyledTitle = styled.div<{
  isEditing: boolean;
}>`
  min-width: 124px;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.02em;
  margin-right: 9px;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: flex-end;
  }

  div:last-child {
    ${(props) => !props.isEditing && "justify-content: flex-end;"}
  }
`;
const StyledType = styled.div`
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: ${teambleColors.purple};
`;
const StyledUnderLine = styled.div`
  position: relative;
  width: 198px;
  height: 30px;
  border-bottom: 2px solid ${teambleColors.black};
`;
const StyledTags = styled.div`
  padding-top: 27px;
  display: flex;
  flex-wrap: wrap;
  & > div + div {
    margin-left: 10px;
  }
`;
const StyledEditingTypes = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-right: -14px;
  top: 100%;

  & > div {
    margin-bottom: 4px;
    margin-right: 9px;
  }
`;
const StyledTypeTestWrapper = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  padding-top: 100px;

  & > div > span {
    font-weight: 500;
    font-size: 12px;
    padding-bottom: 10px;
    color: ${teambleColors.darkGray};
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
`;
