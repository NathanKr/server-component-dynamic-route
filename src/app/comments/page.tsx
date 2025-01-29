import { COMMENTS_URL } from "@/logic/constants"
import { IComment } from "@/types/types";
import axios from "axios"

export default async function Comments(){
    const res = await axios.get<IComment[]>(COMMENTS_URL)
    const comments : IComment[] = res.data;
    const elems = comments.map(it => <p key={it.id}>{it.name}</p>)
    return <>
    <h2>Comments page</h2>
    <p>comments length : {comments.length}</p>
    {elems}
    </>
}