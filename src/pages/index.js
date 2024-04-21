import gsap from "gsap";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Team from "@/components/Team";
import Events from "@/components/Events";
import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import gdscViit1 from "../../public/assets/image1.png";
import gdscViit from "../../public/assets/GDSC-VIIT.png";

export default function Home() {
  let joinus =
    "https://gdsc.community.dev/vignans-institute-of-information-technology-visakhapatnam-india/";
  const headerRef = useRef(null);
  const heroRef1 = useRef(null);
  const heroRef2 = useRef(null);
  const heroRef3 = useRef(null);

  useEffect(() => {
    const headerElements = headerRef.current.querySelectorAll(".h1");
    const heroElement1 = heroRef1.current;
    const heroElement2 = heroRef2.current;
    const heroElement3 = heroRef3.current;

    gsap.from(headerElements, {
      duration: 1.5,
      y: 800,
      stagger: 0.1,
      ease: "power4.inOut",
    });

    gsap.from([heroElement1, heroElement2, heroElement3], {
      duration: 2.5,
      y: 800,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <>
      <Head>
        <title>GDSC VIIT | Google Developer Student Clubs Vignan&apos;s Institute of Information Technology - Visakhapatnam</title>
        <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <link rel="canonical" href="/" />
        <meta name="image" content={gdscViit} />
        <meta property="og:title" content=">GDSC VIIT | Google Developer Student Clubs Vignan&apos;s Institute of Information Technology - Visakhapatnam" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={gdscViit} />
        <meta property="og:description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <meta name="twitter:card" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <meta name="twitter:site" content="@gdsc-viit" />
        <meta name="twitter:title" content="GDSC VIIT | Google Developer Student Clubs Vignan&apos;s Institute of Information Technology - Visakhapatnam" />
        <meta name="twitter:description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <meta name="twitter:image" content={gdscViit} />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
      
      </Head>
      <main className="text-dark dark:text-light">

        {/* GDSC VIIT text animation */}
        <div ref={headerRef} className="header sm:py-10 font-bold">
          <div className="h1 !text-[#e94335]">G</div>
          <div className="h1 !text-[#0f9e59]">D</div>
          <div className="h1 !text-[#4385f5]">S</div>
          <div className="h1 !text-[#fdbc05]">C</div>
          <div className="h1 ">&nbsp;</div>
          <div className="h1 ">V</div>
          <div className="h1 ">I</div>
          <div className="h1 ">I</div>
          <div className="h1 ">T</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 px-10 items-center justify-center align-middle">
          {/* need to change according to an SVGMorph */}
          {/* <div ref={heroRef1} className="hero">
            <Image
              src={gdscViit}
              alt="gdsc-viit"
              className="rounded-lg !px-0"
            />
          </div> */}
          <div
            ref={heroRef1}
            className="hero !border-0 !border-transparent w-[60%] sm:w-[100%]"
          >
            <Image
              src={gdscViit1}
              alt="gdsc-viit"
              className="rounded-lg !px-0"
            />
          </div>

          {/* GDSC Quote and Join Us */}
          <div ref={heroRef2} className=" sm:p-4">
            <div className="flex items-center justify-center text-xl lg:pt-10 align-middle text-center sm:text-base sm:py-10">
              <h3>
                Through workshops, mentorship programs, and knowledge exchange
                sessions, we aim to create a community that values continuous
                growth and sharing of expertise.
              </h3>
            </div>
            <div className="group flex items-center justify-center pt-8">
              <Link
                href={joinus}
                target="_bank"
                className="btn btn-blue transform hover:scale-105 transition-transform duration-300"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Events and Team */}
        <div ref={heroRef3} className="pt-20 sm:pt-10">
          <AnimatedText
            text="Recent Events"
            className="mb-16 lg:!text-xl sm:mb-8 sm:!text-6xl xs:!text-4xl pt-16 flex items-center justify-center"
          />
          <Events />
          <AnimatedText
            text="Meet the Team"
            className="mb-16 lg:!text-xl sm:mb-8 sm:!text-6xl xs:!text-4xl pt-16 flex items-center justify-center"
          />
          <Team />
        </div>
      </main>
    </>
  );
}
