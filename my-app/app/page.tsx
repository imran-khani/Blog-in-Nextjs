import Image from "next/image";
import { client } from "./(sanity)/sanity";
import { Props } from "./(sanity)/interface";

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
      <div className="container mx-auto py-24 px-4">q</div>
    </section>
  );
};

export default Home;
