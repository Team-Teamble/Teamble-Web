import React from "react";
import styled from "styled-components";
import Profile from "../../../assets/svg/Profile";
import { teambleColors } from "../../../styles/color";
import { ProfileBoxDropDown } from "../../molecule/drop-down/ProfileBoxDropDown";

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

export interface ProfileBoxEditingProps {
  metaPosition: {
    id: number;
    name: string;
  }[];
  user: UserInfo;
  className?: string;
  onChange<K extends keyof UserInfo>(category: K, payload: UserInfo[K]): void;
}

export function ProfileBoxEditing(props: ProfileBoxEditingProps) {
  const { user, onChange: onUpdate, className, metaPosition } = props;

  return (
    <StyledProfileBox className={className}>
      {user.photo ? <img src={user.photo} alt="user-profile-photo" /> : <Profile />}
      <StyledName>{user.name}</StyledName>
      <ProfileBoxDropDown onChange={onUpdate} userPosition={user.position} metaPosition={metaPosition} />
      <StyledEmailNPhone>
        <div>{user.email}</div>
        <StyledPhoneInput
          placeholder="전화번호를 입력해주세요"
          value={user.phone ? user.phone : ""}
          onChange={(e) => onUpdate("phone", e.target.value)}
          isEmpty={user.phone ? user.phone : ""}
        />
      </StyledEmailNPhone>
      <StyledSectionLine />
      <StyledSubInfo>
        <div>
          학교{" "}
          <StyledEditInput
            value={user.university ? user.university : ""}
            isEmpty={user.university ? user.university : ""}
            onChange={(e: { target: { value: string } }) => onUpdate("university", e.target.value)}
          />
        </div>
        <div>
          전공{" "}
          <StyledEditInput
            value={user.major ? user.major : ""}
            isEmpty={user.major ? user.major : ""}
            onChange={(e: { target: { value: string } }) => onUpdate("major", e.target.value)}
          />
        </div>
        <div>
          활동지역{" "}
          <StyledEditInput
            value={user.area ? user.area : ""}
            isEmpty={user.area ? user.area : ""}
            onChange={(e: { target: { value: string } }) => onUpdate("area", e.target.value)}
          />
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

const StyledPhoneInput = styled.input<{
  isEmpty: string;
}>`
  margin-top: 12px;
  border-radius: 5px;
  width: 200px;
  min-height: 28px;
  background-color: ${teambleColors.white};
  outline: none;
  padding: 0;
  border: 1px solid ${(props) => (props.isEmpty === "" ? teambleColors.deepGray : teambleColors.deepPurple)};
  text-align: center;
  color: ${teambleColors.black};
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
const StyledEditInput = styled.input<{
  isEmpty: string;
}>`
  border: 1px solid ${(props) => (props.isEmpty === "" ? teambleColors.deepGray : teambleColors.deepPurple)};
  text-align: center;
`;
