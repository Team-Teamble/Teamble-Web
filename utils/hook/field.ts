import { useState } from "react";

export interface Field {
  name: string;
  email: string;
  password: string;
  passwordCheck?: string;
}

export type FieldToLogin = Omit<Field, "passwordCheck">;

export interface LoginFieldChanger {
  <K extends keyof FieldToLogin>(name: K, val: FieldToLogin[K]): void;
}

export interface RegisterFieldChanger {
  <K extends keyof Field>(name: K, val: Field[K]): void;
}

export function useField() {
  const [value, setValue] = useState<FieldToLogin>({
    name: "",
    email: "",
    password: "",
  });

  const [registerValue, setRegisterValue] = useState<Field>({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  function updateField<K extends keyof FieldToLogin>(name: K, val: FieldToLogin[K]) {
    setValue({ ...value, [name]: val });
  }

  function updateRegisterField<K extends keyof Field>(name: K, val: Field[K]) {
    setRegisterValue({ ...registerValue, [name]: val });
    console.log(registerValue);
  }

  return {
    value,
    registerValue,
    setValue,
    updateField,
    updateRegisterField,
  };
}
