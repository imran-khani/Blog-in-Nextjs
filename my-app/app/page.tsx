/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { client, urlFor } from "./(sanity)/sanity";
import { HeroImage } from "./(sanity)/interface";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/MotionDiv";
import Link from "next/link";

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
      <MotionDiv
      key={data.heroImage}
        animation={{
          initial: { opacity: 0 },
          animate: { opacity: 1, scale: 1.0, z: 0 },

          transition: { duration: 0.5 },
          exit: { opacity: 0 },
        }}
        className="mx-auto flex  py-5 md:flex-row flex-col items-center "
      >
        <MotionDiv className=" lg:flex-grow md:w-1/2 py-12  md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0  ">
          <h1 className="text-2xl sm:text-4xl  leading-relaxed  mb-4 font-medium text-gray-900 dark:text-white ">
            Frontend Developer Crafting <br /> Tomorrow Digital Experience
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white ">
            Hey there! Im Imran Khan, a frontend developer specializing in
            React and Next.js. For two years, Ive been weaving creativity into
            code to build captivating digital experiences. Join me on this
            journey as we shape the future of the web, pixel by pixel.
          </p>
          <div className="flex justify-center">
            <Link href={'blog'}>
           <Button className="inline-flex text-white bg-primary/90  border-0 py-2 px-6 focus:outline-none hover:bg-primary  rounded text-lg">
              Read Blog
            </Button> </Link>
            <Button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Download CV
            </Button>
          </div>
        </MotionDiv>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <Image
            className="object-cover object-center rounded h-auto relative md:left-28 lg:bottom-10"
            alt="hero"
            src={urlFor(data.heroImage).url()}
            width={420}
            height={420}
          />
        </div>
      </MotionDiv>
    </section>
  );
};

export default Home;
