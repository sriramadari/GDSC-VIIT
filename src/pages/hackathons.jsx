import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'; 
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkedInIcon, InstagramIcon, TwitterIcon } from "@/components/Icons";
import hackathon1 from "../../public/assets/hackathons/sus-hacks-april-2024.jpg";

const FramerImage = motion(Image);

const FeaturedHackathon = ({ type, title, summary, img, link, github="", instagram="", linkedin="", twitter="" }) => {
  const router = useRouter();
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-[#242424] shadow-2xl p-8
        lg:flex-col lg:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100.7%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-secondary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=""
        >
          <h2 className="relative group my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-xl">
          {title}
          <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === link ? 'w-full' : 'w-0'} dark:bg-light`}></span>
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
        <Link
            href={link}
            target="_blank"
            className="border border-solid border-dark rounded-lg bg-dark dark:bg-light text-light 
                        dark:text-dark p-2 px-6 text-lg font-semibold
                        hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light 
                        hover:border-dark dark:hover:border-light sm:px-4 sm:text-base transition duration-500 ease-in-out"
          >
            Register
          </Link>
          <div className="flex flex-row items-center justify-between mt-1 p-4 pb-6">
            {linkedin !== "" && (
              <motion.a
                href={linkedin}
                target="_blank"
                className="w-10 pr-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
            )}
            {instagram !== "" && (
              <motion.a
                href={instagram}
                target="_blank"
                className="w-10 pr-2 pt-0.5"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <InstagramIcon className={`!fill-dark dark:!fill-light`}/>
              </motion.a>
            )}
            {twitter !== "" && (
              <motion.a
                href={twitter}
                target="_blank"
                className="w-10 px-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon />
              </motion.a>
            )}
            {github !== "" && (
              <motion.a
                href={github}
                target="_blank"
                className="w-10 pr-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
            )}
          </div>
          {/* <Link
            href={link}
            target="_blank"
            className="border border-solid border-dark rounded-lg bg-dark dark:bg-light text-light 
                        dark:text-dark p-2 px-6 text-lg font-semibold
                        hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light 
                        hover:border-dark dark:hover:border-light sm:px-4 sm:text-base transition duration-500 ease-in-out"
          >
            Register
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const Hackathons = ({ type, title, img, link, github="", instagram="", linkedin="", twitter="" }) => {  
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark 
        bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] b
            g-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-secondary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold border border-solid border-dark dark:border-light rounded-xl py-1 px-3
                        hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark md:text-base  transition duration-500 ease-in-out"
          >
            Vist Page
          </Link>
          <div className="flex flex-row items-center justify-between mt-1 p-2">
            {linkedin !== "" && (
              <motion.a
                href={linkedin}
                target="_blank"
                className="w-10 pr-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
            )}
            {instagram !== "" && (
              <motion.a
                href={instagram}
                target="_blank"
                className="w-10 pr-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <InstagramIcon className={`!fill-dark dark:!fill-light`}/>
              </motion.a>
            )}
            {twitter !== "" && (
              <motion.a
                href={twitter}
                target="_blank"
                className="w-10 px-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon />
              </motion.a>
            )}
            {github !== "" && (
              <motion.a
                href={github}
                target="_blank"
                className="w-10 pr-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const hackathons = () => {
  return (
    <>
      <Head>
        <title>Hackathons | GDSC VIIT</title>
        <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
      </Head>
      {/* <TransitionEffect /> */}
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Collaborate, Create, Innovate!"
            className="mb-16 lg:!text-xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedHackathon
                type="24hr Hackathon"
                title="Sus-Hacks"
                summary="Join Sus-Hacks this April for an inspiring journey in tech innovation and social impact. Collaborate, innovate, and create a brighter future together!"
                img={hackathon1}
                link="https://sushacks.vercel.app/"
                instagram="https://www.instagram.com/sus_hacks_viit/"
                linkedin="https://www.linkedin.com/in/sus-hacks-viit-4310542bb/"
                twitter="https://twitter.com/sushacks"
                github="https://github.com/Haricharan0310/sushacks"
              />
            </div>
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default hackathons;
