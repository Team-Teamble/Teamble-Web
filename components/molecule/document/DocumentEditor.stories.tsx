import { Story, Meta } from "@storybook/react/types-6-0";
import { DocumentEditor, DocumentEditorProps } from "./DocumentEditor";

export default {
  title: "molecule/document/DocumentEditor",
  component: DocumentEditor,
} as Meta;

const Template: Story<DocumentEditorProps> = (args) => {
  return <DocumentEditor {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {} as DocumentEditorProps;
