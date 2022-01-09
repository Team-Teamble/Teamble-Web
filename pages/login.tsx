import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { authTokenAtom } from "../states/auth";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const token = useRecoilValue(authTokenAtom);

  async function handleLogin() {
    await axios.post("/api/auth/login", { username, password });
    router.push("/profile");
  }

  async function handleLogout() {
    await axios.post("/api/auth/logout");
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
      <div>token: {token}</div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps<{ accessToken: string | null }> = async (context) => {
//   const cookies = new Cookies(context.req, context.res);

//   const token = cookies.get("accessToken") ?? null;
//   return {
//     props: { accessToken: token },
//   };
// };
