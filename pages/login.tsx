import Link from "next/link";
import { useState } from "react";
import { useLogin, useLogout, useUser } from "../utils/hook/auth";

export default function Login() {
  const login = useLogin({ redirect: "/profile" });
  const logout = useLogout({});

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = useUser();

  async function handleLogin() {
    await login(username, password);
  }

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>logout</button>
        <Link href="/profile">Profile</Link>
      </div>
      <div>token: {user.name}</div>
    </div>
  );
}
