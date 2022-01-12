import React, { useState } from "react";
import styled from "styled-components";
import { PositionDropDown } from "../../../molecule/drop-down/PositionDropDown";
import { teambleColors } from "../../../../styles/color";

export interface RecruitPositionProps {
  position: { id: number; name: string; positionNum: { id: number; option: string }[] }[];
  // selectedPositions: { id: number; numId: number }[];
  // setSelectedPositions: React.Dispatch<SetStateAction<{ id: number; numId: number }[]>>;
}

export function RecruitPosition(props: RecruitPositionProps) {
  // 추후 부모로부터 state / setter 함수 프롭으로 사용, 현재는 세터 함수를 사용하기 위한 테스트용
  // 이 방식이 괜찮은지 추후 건영에게 컨펌
  const { position } = props;
  const [selectedPositions, setSelectedPositions] = useState([
    {
      id: 1,
      numId: 11,
    },
    {
      id: 2,
      numId: 21,
    },
    {
      id: 3,
      numId: 31,
    },
  ]);

  return (
    <StyledRecruitPosition>
      <StyledTitle>모집 포지션</StyledTitle>
      <StyledDropDownContainer>
        {position.map((eachInfo) => (
          <PositionDropDown
            key={eachInfo.id}
            eachInfo={eachInfo}
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
          />
        ))}
      </StyledDropDownContainer>
    </StyledRecruitPosition>
  );
}

const StyledRecruitPosition = styled.div`
  width: 1200px;
`;
const StyledTitle = styled.div`
  width: 114px;
  height: 35px;
  font-size: 24px;
  letter-spacing: -0.02em;
  font-weight: bold;
  color: ${teambleColors.black};
  margin-bottom: 23px;
`;
const StyledDropDownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
