import { LogInForm } from "../components/organism/loginForm/LogInForm";
import { LogInTemplate } from "../components/template/login/LogInTemplate";
import { useLogin } from "../utils/hook/auth";
import { useField } from "../utils/hook/field";
import { withAuth } from "../utils/ssr";

export default function Login() {
  const field = useField();
  const login = useLogin({ redirect: "/profile" });

  async function onLogin(email: string, password: string) {
    await login(email, password);
  }

  return (
    <LogInTemplate
      header={<div></div>}
      contents={
        <LogInForm field={field.value} onLogin={onLogin} onChange={(name, value) => field.updateField(name, value)} />
      }
    />
  );
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
