import { PageUrl } from "@/types/enums";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={PageUrl.comments}>Comments</Link>
    </div>
  );
}
