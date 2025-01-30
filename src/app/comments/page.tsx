import { COMMENTS_URL } from "@/logic/constants";
import { PageUrl } from "@/types/enums";
import { IComment } from "@/types/types";
import axios from "axios";
import Link from "next/link";

// --- page Comments : server component
export default async function Comments() {
  const res = await axios.get<IComment[]>(COMMENTS_URL);
  const comments: IComment[] = res.data;
  const elems = comments.map((it) => (
    <div key={it.id}>
      <Link href={`${PageUrl.comments}/${it.id}`} >
        {it.name}
      </Link>
    </div>
  ));
  return (
    <>
      <h2>Comments page</h2>
      <p>comments length : {comments.length}</p>
      {elems}
    </>
  );
}
