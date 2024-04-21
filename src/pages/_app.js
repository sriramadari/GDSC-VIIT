// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
import Head from "next/head";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/utils/Scrollp";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const showNavbar = router.pathname !== '/';
  return (
    <>
      <Head>
        <title>GDSC VIIT | Google Developer Student Clubs Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
        <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
      </Head>
      <main
        className={`bg-light dark:bg-dark text-dark dark:text-light`}
      >
        {/* {showNavbar && <Navbar />} */}
        <Navbar />
        <Component {...pageProps} />
        <ScrollUp />
        <Footer />
      </main>
    </>
  );
}
