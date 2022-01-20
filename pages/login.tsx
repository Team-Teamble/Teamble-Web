import { useRouter } from "next/router";
import { LogInForm } from "../components/organism/loginForm/LogInForm";
import { LogInTemplate } from "../components/template/login/LogInTemplate";
import { useLogin } from "../utils/hook/auth";
import { useField } from "../utils/hook/field";
import { withAuth } from "../utils/ssr";

export default function Login() {
  const router = useRouter();
  const field = useField();
  const login = useLogin({ redirect: "/profile" });

  async function handleLogin(email: string, password: string) {
    await login(email, password);
    router.push("/");
  }

  return (
    <LogInTemplate
      header={<div></div>}
      contents={
        <LogInForm
          field={field.value}
          onLogin={handleLogin}
          onChange={(name, value) => field.updateField(name, value)}
        />
      }
    />
  );
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
