import { withAuth } from "../utils/ssr";

export default function CreateProject() {
  return <div>프로젝트 생성</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
