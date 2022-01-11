import { Story, Meta } from "@storybook/react/types-6-0";
import { MyPageDropDown, MyPageDropDownProps } from "./MyPageDropDown";

export default {
  title: "atom/drop-down/MyPageDropDown",
  component: MyPageDropDown,
} as Meta;

const Template: Story<MyPageDropDownProps> = (args) => {
  return <MyPageDropDown {...args} />;
};

export const Position = Template.bind({});
Position.args = {
  options: [
    {
      id: 1,
      name: "기획자",
    },
    {
      id: 2,
      name: "디자이너",
    },
    {
      id: 3,
      name: "개발자",
    },
  ],
};
