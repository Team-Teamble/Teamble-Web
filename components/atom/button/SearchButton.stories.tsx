import { Meta, Story } from "@storybook/react/types-6-0";
import { SearchButton, SearchButtonProps } from "./SearchButton";

const src =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS41IDguODc1QzE1LjUgMTIuNjAyOSAxMi40Nzc5IDE1LjYyNSA4Ljc1IDE1LjYyNUM1LjAyMjA4IDE1LjYyNSAyIDEyLjYwMjkgMiA4Ljg3NUMyIDUuMTQ3MDggNS4wMjIwOCAyLjEyNSA4Ljc1IDIuMTI1QzEyLjQ3NzkgMi4xMjUgMTUuNSA1LjE0NzA4IDE1LjUgOC44NzVaTTE0LjE4OTggMTUuNzI5QzEyLjY5NjMgMTYuOTE1OSAxMC44MDU5IDE3LjYyNSA4Ljc1IDE3LjYyNUMzLjkxNzUxIDE3LjYyNSAwIDEzLjcwNzUgMCA4Ljg3NUMwIDQuMDQyNTEgMy45MTc1MSAwLjEyNSA4Ljc1IDAuMTI1QzEzLjU4MjUgMC4xMjUgMTcuNSA0LjA0MjUxIDE3LjUgOC44NzVDMTcuNSAxMC45MzA5IDE2Ljc5MDkgMTIuODIxMyAxNS42MDQgMTQuMzE0OEwxOS40NTcxIDE4LjE2NzlDMTkuODQ3NiAxOC41NTg0IDE5Ljg0NzYgMTkuMTkxNiAxOS40NTcxIDE5LjU4MjFDMTkuMDY2NiAxOS45NzI2IDE4LjQzMzQgMTkuOTcyNiAxOC4wNDI5IDE5LjU4MjFMMTQuMTg5OCAxNS43MjlaIiBmaWxsPSIjN0E1REU4Ii8+Cjwvc3ZnPgo=";

export default {
  title: "atom/button",
  component: SearchButton,
} as Meta;

const Template: Story<SearchButtonProps> = (args) => {
  return <SearchButton {...args} />;
};

export const Search = Template.bind({});
Search.args = {
  src: src,
} as SearchButtonProps;
