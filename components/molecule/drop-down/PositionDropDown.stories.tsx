import { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PositionDropDown, PositionDropDownProps } from "./PositionDropDown";
export default {
  title: "molecule/drop-down/PositionDropDown",
  component: PositionDropDown,
} as Meta;

const Template: Story<PositionDropDownProps> = (args) => {
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
    <PositionDropDown {...args} selectedPositions={selectedPositions} setSelectedPositions={setSelectedPositions} />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  eachInfo: {
    id: 1,
    name: "기획자",
    positionNum: [
      {
        id: 11,
        option: "0 명",
      },
      {
        id: 12,
        option: "1 명",
      },
      {
        id: 13,
        option: "2 명",
      },
      {
        id: 14,
        option: "3 명",
      },
    ],
  },
};
