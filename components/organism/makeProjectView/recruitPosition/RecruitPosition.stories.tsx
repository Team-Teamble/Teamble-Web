import { Meta, Story } from "@storybook/react/types-6-0";
import { RecruitPosition, RecruitPositionProps } from "./RecruitPosition";

export default {
  title: "organism/makeProjectView/recruitPosition",
  component: RecruitPosition,
} as Meta;

const Template: Story<RecruitPositionProps> = (args) => {
  return <RecruitPosition {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as RecruitPositionProps;
