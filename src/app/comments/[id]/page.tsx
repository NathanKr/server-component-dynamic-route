import { COMMENTS_URL } from "@/logic/constants";
import { IComment } from "@/types/types";
import axios from "axios";
import styles from "@/styles/comment-details.module.css";

interface IProps {
  id: string;
}

const CommentDetails = async ({ params }: { params: Promise<IProps> }) => {
  const { id } = await params;
  const commentUrl = `${COMMENTS_URL}/${id}`;
  const res = await axios.get<IComment>(commentUrl);
  const comment: IComment = res.data;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comment Details</h2>
      <p className={styles.text}>
        <span className={styles.label}>Id: </span>
        {comment.id}
      </p>
      <p className={styles.text}>
        <span className={styles.label}>Post Id: </span>
        {comment.postId}
      </p>
      <p className={styles.text}>
        <span className={styles.label}>Name: </span>
        {comment.name}
      </p>
      <p className={styles.text}>
        <span className={styles.label}>Body: </span>
        {comment.body}
      </p>
      <p className={styles.text}>
        <span className={styles.label}>Email: </span>
        {comment.email}
      </p>
    </div>
  );
};

export default CommentDetails;
