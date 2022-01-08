import { Meta, Story } from "@storybook/react/types-6-0";
import { ProfileImage, ProfileProps } from "./ProfileImage";

export default {
  title: "atom/image",
  component: ProfileImage,
} as Meta;

const Template: Story<ProfileProps> = (args) => {
  return <ProfileImage {...args} />;
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  profileSize: "extra-small",
} as ProfileProps;

export const Small = Template.bind({});
Small.args = {
  profileSize: "small",
} as ProfileProps;

export const Medium = Template.bind({});
Medium.args = {
  profileSize: "medium",
} as ProfileProps;

export const Large = Template.bind({});
Large.args = {
  profileSize: "large",
} as ProfileProps;

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  profileSize: "extra-large",
} as ProfileProps;

export const ExtraExtraLarge = Template.bind({});
ExtraExtraLarge.args = {
  profileSize: "extra-extra-large",
} as ProfileProps;
