import Link from "next/link";
import { useState } from "react";
import { apiService } from "../api";
import { Header } from "../components/organism/header/Header";
import { RegisterForm } from "../components/organism/register/RegisterForm";
import { RegisterTemplate } from "../components/template/Register";
import { useAPI } from "../utils/hook/api";
import { useLogin, useLogout, useUser } from "../utils/hook/auth";
import { useField } from "../utils/hook/field";
import { withAuth } from "../utils/ssr";

export default function Register() {
  const field = useField();

  const [isValid, setIsValid] = useState(false);

  //   async function onRegister(name: string, email: string, password: string) {
  //     const register = useAPI((api) => api.auth.register);
  //     register.request({ name: name, email: email, password: password });
  //   }

  async function onRegister() {
    const register = useAPI((api) => api.auth.register);
    register.request({ ...field.registerValue });
    console.log({ ...field.registerValue });
  }

  return (
    <RegisterTemplate
      header={<div></div>}
      contents={
        <RegisterForm
          disabled={true}
          field={field.registerValue}
          onChange={(name, value) => field.updateRegisterField(name, value)}
          onClick={onRegister}
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
