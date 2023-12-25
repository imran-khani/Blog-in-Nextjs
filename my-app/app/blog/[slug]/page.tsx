import { Props } from "@/app/(sanity)/interface";
import { client, urlFor } from "@/app/(sanity)/sanity";
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-full">
            <div className="h-full bg-white/20 rounded-lg overflow-hidden dark:text-gray-100">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={urlFor(data.titleImage).url()}
                alt="blog"
                width={500}
                height={500}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                  {data.title}
                </h1>
                <p className="leading-relaxed mb-3">{data.smallDescription}</p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href={`/blog/${data.slug}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 12a4 4 0 01-8 0"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;

export const generateStaticParams = async () => {
  const data = await client.fetch(`*[_type == 'blog']{slug.current}`);
  console.log(data);
};
