import { withAuth } from "../../utils/ssr";

interface ViewProjectProps {
  projectId: number;
}

export default function ViewProject(props: ViewProjectProps) {
  const { projectId } = props;

  return <div>프로젝트 상세보기 ({projectId})</div>;
}

export const getServerSideProps = withAuth<ViewProjectProps>(async (context) => {
  const projectIdRaw = context.query.projectId;
  const projectId = tryGetNumber(projectIdRaw);

  if (projectId === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectId: projectId,
    },
  };
});

function tryGetNumber(val: string | string[] | undefined): number | null {
  if (val !== undefined && !isNaN(+val)) {
    return +val;
  }
  return null;
}
