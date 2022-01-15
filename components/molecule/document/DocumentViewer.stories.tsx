import { Story, Meta } from "@storybook/react/types-6-0";
import { DocumentViewer, DocumentViewerProps } from "./DocumentViewer";

export default {
  title: "molecule/document/DocumentViewer",
  component: DocumentViewer,
} as Meta;

const Template: Story<DocumentViewerProps> = (args) => {
  return <DocumentViewer {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  value: "# Hello Markdown Viewer World!!!\n~~This is markdown~~",
} as DocumentViewerProps;
