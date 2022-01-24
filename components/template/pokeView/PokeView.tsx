import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface PokeViewProps {
  className?: string;
  profileCards: ReactNode;
  projectCards: ReactNode;
}

export function PokeView(props: PokeViewProps) {
  const { className, profileCards, projectCards } = props;

  return (
    <StyledWrapper className={className}>
      <StyledProjectWrapper>
        <h2>내 프로젝트에 지원한 사람</h2>
        <StyledProjectPoke>{projectCards}</StyledProjectPoke>
      </StyledProjectWrapper>
      <StyledUserWrapper>
        <h2>나를 찔러 본 사람</h2>
        <StyledUserPoke>{profileCards}</StyledUserPoke>
      </StyledUserWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 52rem);
  max-width: 120em;
  height: 100%;
`;

const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 7rem;

  & > h2 {
    font-size: 25px;
    font-weight: 700;
    color: ${teambleColors.black};
    margin-bottom: 8rem;
  }
`;

const StyledProjectPoke = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const StyledUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 30rem;
  height: 100%;

  & > h2 {
    font-size: 25px;
    font-weight: 700;
    color: ${teambleColors.black};
    margin-bottom: 8rem;
  }
`;

const StyledUserPoke = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;
