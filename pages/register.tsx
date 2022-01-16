import { useState } from "react";
import { apiService } from "../api";
import { Header } from "../components/organism/header/Header";
import { RegisterForm } from "../components/organism/register/RegisterForm";
import { RegisterTemplate } from "../components/template/Register";
import { useAPI } from "../utils/hook/api";
import { useField } from "../utils/hook/field";
import { withAuth } from "../utils/ssr";

export default function Register() {
  const field = useField();

  async function onRegister(name: string, email: string, password: string) {
    const register = useAPI((api) => api.auth.register);
    register.request({ name: name, email: email, password: password });
  }

  return (
    <RegisterTemplate
      header={<div></div>}
      contents={
        <RegisterForm
          disabled={true}
          field={field.registerValue}
          onChange={(name, value) => field.updateRegisterField(name, value)}
          onRegister={onRegister}
        />
      }
    />
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
