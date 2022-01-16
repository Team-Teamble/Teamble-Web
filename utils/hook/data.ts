import { useState } from "react";

export function useObject<T>(init: T) {
  const [data, setData] = useState<T>(init);

  function setDataPartial<K extends keyof T>(name: K, val: T[K]) {
    setData({ ...data, [name]: val });
  }

  return {
    data,
    setData,
    setDataPartial,
  };
}
