import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { MyPageTag } from "../../atom/tag/MyPageTag";
import { ProfileTestButton } from "../../atom/button/ProfileTestButton";
export interface TendenciesProps {
  type: { id: number; name: string }[];
  selectedId: number | null;
  tag: { id: number; name: string }[];
  user: { name: string; type: { id: number; name: string } | null };
  //MyPageInfo
  isEditing: boolean;
  className?: string;
  onChange(selectedId: number): void;
}

export function Tendencies(props: TendenciesProps) {
  const { isEditing, tag, type, selectedId, onChange, user } = props;

  return (
    <StyledTendencies>
      <StyledTypeWrapper>
        <StyledTitle>
          {user.name} 님의
          <br />
          협업 성향은
        </StyledTitle>
        {isEditing ? (
          <StyledEditingTypes>
            {type.map(({ id, name }) => (
              <MyPageTag key={id} isActive={selectedId === id} onClick={() => onChange(id)}>
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
          {tag.map(({ id, name }) => (
            <MyPageTag key={id} isActive={true}>
              {name}
            </MyPageTag>
          ))}
        </StyledTags>
      ) : (
        <StyledTypeTestWrapper>
          <div>
            <span>아직 테스트를 하지 않으셨나요?</span>
            <ProfileTestButton />
          </div>
        </StyledTypeTestWrapper>
      )}
    </StyledTendencies>
  );
}

const StyledTendencies = styled.div`
  width: 867px;
  //100%;
`;
const StyledTypeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
`;
const StyledTitle = styled.div`
  min-width: 124px;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.02em;
  margin-right: 14px;
`;
const StyledType = styled.div`
  height: 100%;
  position: relative;
  top: 50%;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.02em;
  margin-left: -20px;
  color: ${teambleColors.purple};
`;
const StyledUnderLine = styled.div`
  position: relative;
  top: 50%;
  width: 198px;
  height: 30px;
  border-bottom: 2px solid ${teambleColors.black};
`;
const StyledTags = styled.div`
  padding-top: 27px;

  & > div + div {
    margin-left: 10px;
  }
`;
const StyledEditingTypes = styled.div`
  position: relative;
  top: 50%;

  & > div {
    margin-bottom: 4px;
    margin-right: 10px;
  }
`;
const StyledTypeTestWrapper = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  padding-top: 92px;

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
