import { useState } from "react";

export interface Meta {
  position: { id: number; name: string }[];
  type: { id: number; name: string }[];
  field: { id: number; name: string }[];
}

export interface MyPageInfo {
  id: number;
  idFirebase: string;
  name: string;
  email: string;
  photo: string;
  phone: string | null;
  university: string | null;
  major: string | null;
  area: string | null;
  intro: string | null;
  description: string | null;
  isChecked: boolean;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  projectId: number | null;
  type: { id: number; name: string } | null;
  tag: { id: number; name: string }[];
  position: { id: number; name: string }[];
  field: { id: number; name: string }[];
}

export interface MyPageUpdateHandler {
  <K extends keyof MyPageInfo>(name: K, val: MyPageInfo[K]): void;
}

export function useMyPage(userInfo: MyPageInfo) {
  const [user, setUser] = useState<MyPageInfo>(userInfo);

  function handleUpdate<K extends keyof MyPageInfo>(name: K, val: MyPageInfo[K]) {
    setUser({ ...user, [name]: val });
  }

  return {
    user,
    setUser,
    handleUpdate,
  };
}
