import { RegisterForm } from "../components/organism/register/RegisterForm";
import { RegisterTemplate } from "../components/template/Register";
import { useAPI } from "../utils/hook/api";
import { useField } from "../utils/hook/field";

export default function Register() {
  const field = useField();
  const register = useAPI((api) => api.auth.register);

  async function onRegister(name: string, email: string, password: string) {
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
