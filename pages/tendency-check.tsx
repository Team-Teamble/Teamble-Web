import { withAuth } from "../utils/ssr";

export default function TendencyCheck() {
  return <div>협업성향 테스트</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
