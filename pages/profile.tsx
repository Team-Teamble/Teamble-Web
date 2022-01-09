import { useRecoilValue } from "recoil";
import { authTokenAtom } from "../states/auth";
import { withAuth } from "../utils/ssr";

export default function Profile({ hello }: { hello: string }) {
  const token = useRecoilValue(authTokenAtom);

  return <div>{token}</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: { hello: "world" },
  };
});
