import { useState } from "react";
import { BadRequestError } from "../api/util/error";
import { RegisterForm } from "../components/organism/register/RegisterForm";
import { RegisterTemplate } from "../components/template/Register";
import { useAPILegacy } from "../utils/hook/api";
import { useRouter } from "next/router";
import { useField } from "../utils/hook/field";

export default function Register() {
  const field = useField();
  const register = useAPILegacy((api) => api.auth.register);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegister(name: string, email: string, password: string) {
    try {
      await register.request({ name: name, email: email, password: password });
      router.push("/login");
    } catch (e) {
      if (e instanceof BadRequestError) {
        setError(e.message);
      } else {
        throw e;
      }
    }
  }

  const canPass = !!(
    field.registerValue.password === field.registerValue.passwordCheck &&
    field.registerValue.email.length &&
    field.registerValue.name &&
    field.registerValue.password.length >= 6
  );

  return (
    <RegisterTemplate
      contents={
        <RegisterForm
          disabled={true}
          field={field.registerValue}
          canPass={canPass}
          error={error}
          onChange={(name, value) => field.updateRegisterField(name, value)}
          onRegister={handleRegister}
        />
      }
    />
  );
}
