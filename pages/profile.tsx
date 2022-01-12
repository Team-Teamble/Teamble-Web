import { withAuth } from "../utils/ssr";
import { useUser } from "../utils/hook/auth";

export default function Profile() {
  const user = useUser();

  return <div>name: {user?.name}</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
