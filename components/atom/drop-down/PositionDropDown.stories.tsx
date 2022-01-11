import { Story, Meta } from "@storybook/react/types-6-0";
import { PositionDropDown, PositionDropDownProps } from "./PositionDropDown";

export default {
  title: "atom/drop-down/PositionDropDown",
  component: PositionDropDown,
} as Meta;

const Template: Story<PositionDropDownProps> = (args) => {
  return <PositionDropDown {...args} />;
};

export const Position = Template.bind({});
Position.args = {
  options: [
    {
      id: 1,
      name: "전체",
    },
    {
      id: 2,
      name: "OCO",
    },
    {
      id: 3,
      name: "반려동물",
    },
  ],
};
