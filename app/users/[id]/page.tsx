interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
