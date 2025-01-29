interface IProps {
  id: string;
}

const CommentDetails = async ({ params }: { params: Promise<IProps> }) => {
  const { id } = await params;
  return <h2>Comment : {id}</h2>;
};

export default CommentDetails;
