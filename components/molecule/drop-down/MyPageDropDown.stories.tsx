import { Story, Meta } from "@storybook/react/types-6-0";
import { MyPageDropDown, MyPageDropDownProps } from "./MyPageDropDown";

export default {
  title: "molecule/drop-down/MyPageDropDown",
  component: MyPageDropDown,
} as Meta;

const Template: Story<MyPageDropDownProps> = (args) => {
  return <MyPageDropDown {...args} />;
};

export const MyPage = Template.bind({});
MyPage.args = {
  options: {
    id: 1,
    options: [
      {
        id: 11,
        option: "전체",
      },
      {
        id: 12,
        option: "1주 - 1개월",
      },
      {
        id: 13,
        option: "1개월 - 3개월",
      },
      {
        id: 14,
        option: "3개월 이상",
      },
    ],
  },
} as MyPageDropDownProps;
