import { Meta, Story } from "@storybook/react/types-6-0";
import { EmailAddButton, EmailAddButtonProps } from "./EmailAddButton";

const addImgSrc =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTNDNSA5LjIyODc2IDUgNy4zNDMxNSA2LjE3MTU3IDYuMTcxNTdDNy4zNDMxNSA1IDkuMjI4NzYgNSAxMyA1SDI3QzMwLjc3MTIgNSAzMi42NTY5IDUgMzMuODI4NCA2LjE3MTU3QzM1IDcuMzQzMTUgMzUgOS4yMjg3NiAzNSAxM1YyN0MzNSAzMC43NzEyIDM1IDMyLjY1NjkgMzMuODI4NCAzMy44Mjg0QzMyLjY1NjkgMzUgMzAuNzcxMiAzNSAyNyAzNUgxM0M5LjIyODc2IDM1IDcuMzQzMTUgMzUgNi4xNzE1NyAzMy44Mjg0QzUgMzIuNjU2OSA1IDMwLjc3MTIgNSAyN1YxM1oiIGZpbGw9IiM3QTVERTgiLz4KPHBhdGggZD0iTTIwIDEzLjMzMzVMMjAgMjYuNjY2OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNi42NjcgMjBMMTMuMzMzNyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";

export default {
  title: "atom/button",
  component: EmailAddButton,
} as Meta;

const Template: Story<EmailAddButtonProps> = (args) => {
  return <EmailAddButton {...args} />;
};

export const EmailAdd = Template.bind({});
EmailAdd.args = {
  addImgSrc: addImgSrc,
};
