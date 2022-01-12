import { Meta, Story } from "@storybook/react/types-6-0";
import { SingleDropDown, SingleDropDownProps } from "./SingleDropDown";
import styled from "styled-components";
export default {
  title: "atom/drop-down/SingleDropDown",
  component: SingleDropDown,
  decorators: [
    (Story) => (
      <StyledWrapper>
        <Story />
      </StyledWrapper>
    ),
  ],
} as Meta;
const StyledWrapper = styled.div`
  & > ul {
    top: 0;
    left: 100px;
  }
`;
const Template: Story<SingleDropDownProps> = (args) => {
  return <SingleDropDown {...args} />;
};

export const Single = Template.bind({});
Single.args = {
  options: [
    { id: 11, option: "0 명" },
    { id: 12, option: "1 명" },
    { id: 13, option: "2 명" },
    { id: 14, option: "3 명" },
    { id: 15, option: "4 명" },
  ],
  isFilter: false,
};
