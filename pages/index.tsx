import { withAuth } from "../utils/ssr";

export default function Home() {
  return <div>Hello world!</div>;
}

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
