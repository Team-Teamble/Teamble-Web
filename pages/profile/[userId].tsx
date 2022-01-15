import { withAuth } from "../../utils/ssr";

interface ProfileByIdProps {
  userId: number | null;
}

export default function ProfileById(props: ProfileByIdProps) {
  const { userId } = props;

  return <div>{userId === null ? <p>이거 맞나?</p> : <p>userId: {userId}</p>}</div>;
}

export const getServerSideProps = withAuth<ProfileByIdProps>(async (context) => {
  const userIdRaw = context.query.userId;
  const userId = tryGetNumber(userIdRaw);

  return {
    props: {
      userId,
    },
  };
});

function tryGetNumber(val: string | string[] | undefined): number | null {
  if (val !== undefined && !isNaN(+val)) {
    return +val;
  }
  return null;
}
