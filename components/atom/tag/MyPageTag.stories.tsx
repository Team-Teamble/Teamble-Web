import { Meta, Story } from "@storybook/react/types-6-0";
import { MyPageTag, MyPageTagProps } from "./MyPageTag";

export default {
  title: "atom/tag/mypage",
  component: MyPageTag,
} as Meta;

const Template: Story<MyPageTagProps> = (args) => {
  return <MyPageTag {...args} />;
};

export const MyPage = Template.bind({});
MyPage.args = {
  children: "정열적인 빨강이",
} as MyPageTagProps;
