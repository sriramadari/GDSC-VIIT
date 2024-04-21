import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";

const MemberProfile = ({ name, profilePic, role, about, github = "", linkedin = "", twitter = "" }) => {
  return (
    <>
      <Head>
        <title>{name} | Google Developer Student Clubs Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
        <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
      </Head>
      <main className="p-8 items-center justify-between">

        {/* member name */}
        <div className="flex items-center justify-center text-5xl sm:text-2xl py-8 font-semibold">
          {name}
        </div>

        {/* member profile pic */}
        <div className="flex items-center justify-center ">
          <Image
            src={profilePic}
            alt={`${name}-profile-pic`}
            className="rounded-full w-60 h-60"
          />
        </div>

        {/* member profile socials */}
        <div className="pt-8 flex items-center justify-center pl-2">
          <nav className="flex items-center justify-center flex-wrap">
            {linkedin !== "" && (
              <motion.a
                href={`${linkedin}`}
                target={"_blank"}
                className="w-6 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
            )}
            {linkedin !== "" && (
              <motion.a
                href={`${github}`}
                target={"_blank"}
                className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
            )}
            {linkedin !== "" && (
              <motion.a
                href={`${twitter}`}
                target={"_blank"}
                className="w-6 mx-3 sm:mx-1 rounded-full"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon className={`!fill-dark dark:!fill-light`} />
              </motion.a>
            )}
          </nav>
        </div>

        {/* member role */}
        <div className="flex items-center justify-center pt-4 pl-2">{role}</div>

        {/* About */}
        <section className="px-40 sm:px-4 pt-24 sm:pt-8">
          <h1 className="text-3xl pb-8">About</h1>
          {about}
        </section>
      </main>
    </>
  );
};

export default MemberProfile;
