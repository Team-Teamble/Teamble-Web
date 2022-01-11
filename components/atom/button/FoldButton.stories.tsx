import { Meta, Story } from "@storybook/react/types-6-0";
import { FoldButton, FoldButtonProps } from "./FoldButton";

const src =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxOCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjcwNzEgMS43MDcxMUMxOC4wOTc2IDEuMzE2NTggMTguMDk3NiAwLjY4MzQxOCAxNy43MDcxIDAuMjkyODkzQzE3LjMxNjYgLTAuMDk3NjMxMSAxNi42ODM0IC0wLjA5NzYzMTEgMTYuMjkyOSAwLjI5Mjg5M0wxNy43MDcxIDEuNzA3MTFaTTkgOUw4LjI5Mjg5IDkuNzA3MTFDOC40ODA0MyA5Ljg5NDY0IDguNzM0NzggMTAgOSAxMEM5LjI2NTIyIDEwIDkuNTE5NTcgOS44OTQ2NCA5LjcwNzExIDkuNzA3MTFMOSA5Wk0xLjcwNzExIDAuMjkyODkzQzEuMzE2NTggLTAuMDk3NjMxNSAwLjY4MzQxNyAtMC4wOTc2MzE2IDAuMjkyODkzIDAuMjkyODkzQy0wLjA5NzYzMTIgMC42ODM0MTcgLTAuMDk3NjMxMyAxLjMxNjU4IDAuMjkyODkzIDEuNzA3MTFMMS43MDcxMSAwLjI5Mjg5M1pNMTYuMjkyOSAwLjI5Mjg5M0w4LjI5Mjg5IDguMjkyODlMOS43MDcxMSA5LjcwNzExTDE3LjcwNzEgMS43MDcxMUwxNi4yOTI5IDAuMjkyODkzWk05LjcwNzExIDguMjkyODlMMS43MDcxMSAwLjI5Mjg5M0wwLjI5Mjg5MyAxLjcwNzExTDguMjkyODkgOS43MDcxMUw5LjcwNzExIDguMjkyODlaIiBmaWxsPSIjOUQ5RDlEIi8+Cjwvc3ZnPgo=";

export default {
  title: "atom/button",
  component: FoldButton,
} as Meta;

const Template: Story<FoldButtonProps> = (args) => {
  return <FoldButton {...args} />;
};

export const Fold = Template.bind({});
Fold.args = {
  children: "전체",
  src: src,
} as FoldButtonProps;
