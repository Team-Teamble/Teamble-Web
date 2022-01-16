import { withAuth } from "../../utils/ssr";

export default function SearchUser() {
  return <div>유저찾기</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
