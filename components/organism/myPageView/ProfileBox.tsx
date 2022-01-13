import React from "react";
import styled from "styled-components";
// import { Profile } from "../../../assets/svg/ic_profile.svg";
import Profile from "../../../assets/svg/Profile";
import { ProfileBoxDropDown } from "../../molecule/drop-down/ProfileBoxDropDown";
import { ProfileEditButton } from "../../atom/button/ProfileEditButton";
import { teambleColors } from "../../../styles/color";
import { MyPageInfo, MyPageUpdateHandler } from "../../../utils/myPage";
import { Dummy } from "../../../utils/myPage";

export interface ProfileBoxProps {
  dummy: Dummy;
  user: MyPageInfo;
  isEditing: boolean;
  className?: string;
  handleEdit(): void;
  handleUpdate: MyPageUpdateHandler;
}

export function ProfileBox(props: ProfileBoxProps) {
  const { user, isEditing, handleEdit, handleUpdate, className, dummy } = props;

  return (
    <StyledProfileBox className={className}>
      {user.photo ? <img src={user.photo} /> : <Profile />}
      <StyledName>정세연</StyledName>
      <ProfileBoxDropDown userPosition={user.position} position={dummy.position} isEditing={isEditing} />
      <StyledEmailNPhone>
        <div>{user.email}</div>
        {isEditing ? (
          <StyledPhoneInput
            placeholder="전화번호를 입력해주세요"
            value={user.phone ? user.phone : ""}
            onChange={(e) => handleUpdate("phone", e.target.value)}
            isEmpty={user.phone ? user.phone : ""}
          />
        ) : (
          <div>{user.phone}</div>
        )}
      </StyledEmailNPhone>
      <StyledSectionLine />
      <ProfileEditButton handleEdit={handleEdit} isEditing={isEditing} />
      <StyledSubInfo>
        <div>
          학교{" "}
          {isEditing ? (
            <StyledEditInput
              value={user.university ? user.university : ""}
              isEmpty={user.university ? user.university : ""}
              onChange={(e) => handleUpdate("university", e.target.value)}
            />
          ) : (
            <span>{user.university}</span>
          )}
        </div>
        <div>
          전공{" "}
          {isEditing ? (
            <StyledEditInput
              value={user.major ? user.major : ""}
              isEmpty={user.major ? user.major : ""}
              onChange={(e) => handleUpdate("major", e.target.value)}
            />
          ) : (
            <span>{user.major}</span>
          )}
        </div>
        <div>
          활동지역{" "}
          {isEditing ? (
            <StyledEditInput
              value={user.area ? user.area : ""}
              isEmpty={user.area ? user.area : ""}
              onChange={(e) => handleUpdate("area", e.target.value)}
            />
          ) : (
            <span>{user.area}</span>
          )}
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

  & > svg {
    width: 125px;
    height: 125px;
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
    min-height: 24px;
  }
`;

const StyledPhoneInput = styled.input<{
  isEmpty: string;
}>`
  margin-top: 12px;
  border-radius: 5px;
  width: 200px;
  height: 24px;
  background-color: ${teambleColors.white};
  outline: none;
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
