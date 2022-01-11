import { Story, Meta } from "@storybook/react/types-6-0";
import { GroupDropDown, GroupDropDownProps } from "./GroupDropDown";

export default {
  title: "atom/drop-down/GroupDropDown",
  component: GroupDropDown,
} as Meta;

const Template: Story<GroupDropDownProps> = (args) => {
  return <GroupDropDown {...args} />;
};

export const Group = Template.bind({});
Group.args = {
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
    {
      id: 4,
      name: "전체",
    },
    {
      id: 5,
      name: "이모저모",
    },
    {
      id: 6,
      name: "OCO",
    },
    {
      id: 7,
      name: "반려동물",
    },
    {
      id: 8,
      name: "전체",
    },
  ],
};
