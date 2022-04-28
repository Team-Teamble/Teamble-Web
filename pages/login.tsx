import { useState } from "react";
import { BadRequestError } from "../api/util/error";
import { LogInForm } from "../components/organism/loginForm/LogInForm";
import { LogInTemplate } from "../components/template/login/LogInTemplate";
import { useLogin } from "../utils/hook/auth";
import { useField } from "../utils/hook/field";

export default function Login() {
  const field = useField();
  const login = useLogin({ redirect: "/" });

  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleLogin(email: string, password: string) {
    try {
      await login(email, password);
    } catch (e) {
      if (e instanceof BadRequestError) {
        setErrorMsg(e.message);
      } else {
        throw e;
      }
    }
  }

  return (
    <LogInTemplate
      header={<div></div>}
      contents={
        <LogInForm
          field={field.value}
          onLogin={handleLogin}
          onChange={(name, value) => {
            field.updateField(name, value);
            setErrorMsg("");
          }}
          error={errorMsg}
        />
      }
    />
  );
}
