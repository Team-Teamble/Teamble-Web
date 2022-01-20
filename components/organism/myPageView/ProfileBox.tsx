import React, { ReactNode } from "react";
import styled from "styled-components";
import Profile from "../../../assets/svg/Profile";
import { teambleColors } from "../../../styles/color";
import { ProfileBoxFold } from "../../atom/button/ProfileBoxFold";
export interface ProfileBoxProps {
  user: UserInfo;
  className?: string;
  editControl: ReactNode;
}

interface UserInfo {
  name: string;
  photo: string;
  position: { id: number; name: string }[];
  email: string;
  phone: string;
  university: string;
  major: string;
  area: string;
}

export function ProfileBox(props: ProfileBoxProps) {
  const { user, className, editControl } = props;

  return (
    <StyledProfileBox className={className}>
      {user.photo ? <img src={user.photo} alt="user-profile-photo" /> : <Profile />}
      <StyledName>{user.name}</StyledName>
      <ProfileBoxFold currentOption={user.position} />
      <StyledEmailNPhone>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </StyledEmailNPhone>
      <StyledSectionLine />
      {editControl}
      <StyledSubInfo>
        <div>
          학교 <span>{user.university}</span>
        </div>
        <div>
          전공 <span>{user.major}</span>
        </div>
        <div>
          활동지역 <span>{user.area}</span>
        </div>
      </StyledSubInfo>
    </StyledProfileBox>
  );
}

const StyledProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 322px;
  height: 841px;
  background: ${teambleColors.white};
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  padding-top: 10.2em;
  & > svg,
  img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }
`;
const StyledName = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 43px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 27px;
  margin-bottom: 5px;
  color: ${teambleColors.black};
`;
const StyledEmailNPhone = styled.div`
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${teambleColors.darkGray};
  margin-top: 31px;
  margin-bottom: 24px;
  & > div + div {
    margin-top: 12px;
    min-height: 30px;
  }
`;

const StyledSectionLine = styled.div`
  width: 258px;
  height: 1px;
  background-color: ${teambleColors.gray};
  margin-bottom: 49px;
`;

const StyledSubInfo = styled.div`
  margin-top: 89px;

  div,
  span {
    font-weight: 500;
    text-align: center;
    letter-spacing: -0.02em;
    font-size: 16px;
  }
  & > div {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    width: 258px;
    height: 43px;
    border-bottom: 1px solid ${teambleColors.gray};
    color: ${teambleColors.deepGray};

    & > span {
      margin-left: auto;
      color: ${teambleColors.black};
    }

    & > input {
      margin-left: auto;
      border-radius: 5px;
      width: 130px;
      height: 30px;
      background-color: ${teambleColors.white};
      outline: none;
    }
  }
`;
