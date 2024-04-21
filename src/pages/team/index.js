import Head from "next/head";
import "@/styles/Hero.module.css";
import Team from "@/components/Team";
import AnimatedText from "@/components/AnimatedText";

export default function TeamMembers() {
  return (
    <>
      <Head>
        <title>Team of 2023 | GDSC VIIT</title>
        <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
      </Head>
      <main className="text-dark dark:text-light w-full h-full">
        <AnimatedText
          text="Meet the Team of 2023"
          className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl pt-16 flex items-center justify-center"
        />
        
        {/* team of 2023 */}
        <Team />
      </main>
    </>
  );
}
