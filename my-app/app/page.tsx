import Image from "next/image";
import { client, urlFor } from "./(sanity)/sanity";
import { HeroImage } from "./(sanity)/interface";
import { Button } from "@/components/ui/button";
import {motion} from "framer-motion"

const getData = async () => {
  const query = `
    *[_type=='heroImage']{
        heroImage,
      }[0]`;
  const data = await client.fetch(query);
  return data;
};
const Home = async () => {
  const data: HeroImage = await getData();
  return (
    <section className="text-gray-600 body-font">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}    
      className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Frontend Developer Crafting Tomorrow's Digital Experience
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">
            Hey there! I'm Imran Khan, a frontend developer specializing in
            React and Next.js. For two years, I've been weaving creativity into
            code to build captivating digital experiences. Join me on this
            journey as we shape the future of the web, pixel by pixel.
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex text-white bg-primary/90  border-0 py-2 px-6 focus:outline-none hover:bg-primary  rounded text-lg">
              Read Blog
            </Button>
            <Button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Download CV
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <Image
            className="object-cover object-center rounded h-auto relative md:left-20 lg:bottom-10"
            alt="hero"
            src={urlFor(data.heroImage).url()}
            width={400}
            height={400}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
