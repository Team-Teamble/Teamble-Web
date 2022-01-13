import { Meta, Story } from "@storybook/react/types-6-0";
import { FilterLayout, FilterLayoutProps } from "./FilterLayout";
export default {
  title: "molecule/layout",
  component: FilterLayout,
} as Meta;

const Template: Story<FilterLayoutProps> = (args) => {
  return <FilterLayout {...args} />;
};

export const Filter = Template.bind({});
Filter.args = {
  title: "사이드 프로젝트 찾기",
};
