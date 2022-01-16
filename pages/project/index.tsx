import { withAuth } from "../../utils/ssr";

export default function SearchProject() {
  return <div>프로젝트 찾기</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
