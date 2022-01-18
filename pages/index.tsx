import { withAuth } from "../utils/ssr";
import LandingTemplate from "../components/template/LandingTemplate";
import { Header } from "../components/organism/landing/Header";
import { LandingPage } from "../components/organism/landing/LandingPage";

export default function Home() {
  return <LandingTemplate header={<Header />} contents={<LandingPage />} />;
}

export const getServerSideProps = withAuth(async (context) => {
  return {
    props: {},
  };
});
