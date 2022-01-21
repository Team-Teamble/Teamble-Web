import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileField, ProfileFieldProps } from "./ProfileField";

export default {
  title: "molecule/profileField",
  component: ProfileField,
} as Meta;

const Template: Story<ProfileFieldProps> = (args) => {
  return <ProfileField {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  userName: "마가렛",
};
