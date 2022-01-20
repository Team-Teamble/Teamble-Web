import { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PositionDropDown, PositionDropDownProps } from "./PositionDropDown";
export default {
  title: "molecule/drop-down/PositionDropDown",
  component: PositionDropDown,
} as Meta;

const Template: Story<PositionDropDownProps> = (args) => {
  return <PositionDropDown {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};
