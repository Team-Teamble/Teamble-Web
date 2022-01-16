import Link from "next/link";
import { useState } from "react";
import { Header } from "../components/organism/header/Header";
import { LogInForm } from "../components/organism/loginForm/LogInForm";
import { LogInTemplate } from "../components/template/login/LogInTemplate";
import { useLogin, useLogout, useUser } from "../utils/hook/auth";
import { withAuth } from "../utils/ssr";

export default function Login() {
  const login = useLogin({ redirect: "/profile" });
  const logout = useLogout({});

  const user = useUser();

  async function handleLogin(username: string, password: string) {
    await login(username, password);
  }

  async function handleLogout() {
    await logout();
  }

  return <LogInTemplate header={<div></div>} contents={<LogInForm onLogin={handleLogin} />} />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
