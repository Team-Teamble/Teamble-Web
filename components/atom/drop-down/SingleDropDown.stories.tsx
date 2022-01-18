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
  isFilter: false,
};
