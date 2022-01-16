import { LogInForm } from "../components/organism/loginForm/LogInForm";
import { LogInTemplate } from "../components/template/login/LogInTemplate";
import { useLogin } from "../utils/hook/auth";
import { withAuth } from "../utils/ssr";

export default function Login() {
  const login = useLogin({ redirect: "/profile" });

  async function handleLogin(username: string, password: string) {
    await login(username, password);
  }

  return <LogInTemplate header={<div></div>} contents={<LogInForm onLogin={handleLogin} />} />;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
