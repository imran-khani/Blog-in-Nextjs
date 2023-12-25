import { Props } from "@/app/(sanity)/interface";
import { client, urlFor } from "@/app/(sanity)/sanity";
import EmojiCount from "@/components/EmojiCount";
import { Link } from "lucide-react";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `*[_type=='blog' && slug.current == '${slug}'] | order(_createdAt desc){
          title,
           titleImage,
            "slug":slug.current,
             smallDescription,
            content
       }[0]`;
  const data = await client.fetch(query);
  return data;
};

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const data: Props = await getData(params.slug);
  return (
    // post full page for single blog
    <section className="text-gray-600 ">
      <div className="h-full py-10  rounded-lg overflow-hidden dark:text-white \">
        <Image
          className="md:h-[55%] w-full  object-center rounde-lg "
          src={urlFor(data.titleImage).url()}
          alt="blog"
          width={700}
          height={700}
        />
        <div className="py-6">
          <h1 className="title-font text-4xl leading-relaxed  md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-3 text-primary ">
            {data.title}
          </h1>
          <p className="leading-relaxed mb-3 text-xl">{data.content}</p>
          <div className="flex items-center flex-wrap ">
            <span className="text-gray-500 mr-3 inline-flex items-center  leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              1.2K
            </span>
            <EmojiCount />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;

export const generateStaticParams = async () => {
  const data = await client.fetch(`*[_type == 'blog']{slug}`);
  return data.map((slug: { slug: string }) => {
    return {
      params: {
        slug: slug.slug,
      },
    };
  });
};
