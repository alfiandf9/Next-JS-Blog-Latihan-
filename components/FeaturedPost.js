import InfoPost from "@/components/InfoPost";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:7/12 w-full">
          <Link href="/detail">
            <a>
              {/* <div className="w-full h-96 rounded-full relative"> */}
                <img 
                  src="/featured-thumbnail.png"
                  className="rounded-xl"
                  alt="featured-thumbnail" 
                />
              {/* </div> */}
            </a>
          </Link>
        </div>
        <div className="px-4 lg:w-4/12 md:5/12 w-full">
          <InfoPost 
            category="UI DESIGN"
            date="August 2, 2022"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-8 lg:hidden" />
    </article>
  );
}
