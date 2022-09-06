import InfoPost from "@/components/InfoPost";
import Image from "next/image";
import Link from "next/link";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          {/* <div className="w-[340px] h-[213px] rounded relative"> */}
            <img 
              src={thumbnail}
              className="w-full rounded"
              alt={infoPost.title} 
            />
          {/* </div> */}
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
