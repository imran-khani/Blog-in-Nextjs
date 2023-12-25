import Image from "next/image";
import { client, urlFor } from "./(sanity)/sanity";
import { Props } from "./(sanity)/interface";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type=='blog'] | order(_createdAt desc){
        title,
         titleImage,
          "slug":slug.current,
           smallDescription,
          content
     }`;
  const data = await client.fetch(query);
  return data;
};

const Home = async () => {
  const data: Props[] = await getData();
  return (
    <section className="text-gray-600 ">
      <div className="container mx-auto py-24 px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {data?.map((post) => (
          <div
            key={post.slug}
            className="h-full w-full border dark:border-orange-200"
          >
            <Link className="" href={post.slug}>
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                width={200}
                height={200}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
