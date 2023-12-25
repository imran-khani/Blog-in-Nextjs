import Image from "next/image";
import { client } from "./(sanity)/sanity";

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

const Home = () => {
  return <div>Home</div>;
};

export default Home;
