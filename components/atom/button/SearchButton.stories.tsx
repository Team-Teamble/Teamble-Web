import { Meta, Story } from "@storybook/react/types-6-0";
import { SearchButton, SearchButtonProps } from "./SearchButton";

export default {
  title: "atom/button",
  component: SearchButton,
} as Meta;

const Template: Story<SearchButtonProps> = (args) => {
  return <SearchButton {...args} />;
};

export const Search = Template.bind({});
Search.args = {} as SearchButtonProps;
