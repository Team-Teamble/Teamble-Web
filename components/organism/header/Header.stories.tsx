import { Meta, Story } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "./Header";

export default {
  title: "organism/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};

export const HeaderOrganism = Template.bind({});
HeaderOrganism.args = {
  isLogin: false,

  user: {
    id: 0,
    name: "마가렛",
    photo: "",
    projectId: null,
  },
} as HeaderProps;
