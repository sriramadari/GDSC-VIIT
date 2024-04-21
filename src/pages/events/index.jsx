import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import EventCard from "@/components/EventCard";
import AnimatedText from "@/components/AnimatedText";
import LLMs from "../../../public/assets/events/LLMs.png";
import android from "../../../public/assets/events/android.png";
import rebase01 from "../../../public/assets/events/rebase-01.png";
import uxBootcamp from "../../../public/assets/events/UX-Bootcamp.png";
import cvToCareer from "../../../public/assets/events/cv-to-career.png";
import flutter01 from "../../../public/assets/events/FLUTTER-yaswanth.png";
import flutter02 from "../../../public/assets/events/Flutter-first-app.png";
import opensource from "../../../public/assets/events/open-source-git-github.png";
import solutionchallenge from "../../../public/assets/events/intro-google-solution-challenge.png";
import becomGdscLead2024 from "../../../public/assets/events/become-gdsc-lead-2024.png";

const FramerImage = motion(Image);

const FeaturedEvent = ({ type, link, title, description, img, rsvp }) => {
  const router = useRouter();
  return (
    <>
      <article
        className="w-[80%] sm:w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-[#242424] shadow-2xl p-6
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
          <Link href={rsvp} target="_blank" className="">
            <h2 className="relative group my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-xl">
              {title}
              <span
                className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === link ? "w-full" : "w-0"
                } dark:bg-light`}
              ></span>
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {description}
          </p>
          <div className="mt-2 flex items-center">
            <Link
              href={rsvp}
              target="_blank"
              className="border border-solid border-dark rounded-lg bg-dark dark:bg-light text-light 
                        dark:text-dark p-2 px-6 text-lg font-semibold
                        hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light 
                        hover:border-dark dark:hover:border-light sm:px-4 sm:text-base transition duration-500 ease-in-out"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Events = () => {
  return (
    <>
      <Head>
        <title>Events | GDSC VIIT</title>
        <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
      </Head>
      <section className="container px-14 sm:px-8 pb-20">
        <AnimatedText
          text="Recent Events"
          className="mb-16 lg:!text-xl sm:mb-8 sm:!text-6xl xs:!text-4xl pt-16 flex items-center justify-center"
        />
        <div className="flex items-center justify-center pb-10">
          <FeaturedEvent
            type="Featured Event"
            title="CV to Career 📑"
            description="Session covering topics like career planning, how to crack internship & resume strategies."
            img={cvToCareer}
            link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-cv-to-career/"
            rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-cv-to-career/"
          />
        </div>
        <div className="flex items-center justify-center relative mt-2">
          <div className="grid grid-cols-4 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center">
            {/* <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-cv-to-career/"
              title="CV to Career 📑"
              eventdate={"Mar 30, 2024"}
              featuredImage={cvToCareer}
              description="Session covering topics like career planning, how to crack internship & resume strategies."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-cv-to-career/"
            /> */}
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-road-to-becoming-google-developer-student-clubs-lead-1/"
              title='Road to becoming "Google Developer Student Clubs" Lead'
              featuredImage={becomGdscLead2024}
              eventdate={"Mar 25, 2024"}
              description="We  are bringing you a chance to be a part of the Google Developers Students Club, which is a group of passionate leaders at their universities who are dedicated to helping their peers learn and connect.              "
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-road-to-becoming-google-developer-student-clubs-lead-1/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-rebase/cohost-vignans-institute-of-information-technology-visakhapatnam"
              title="Intro to Rebase 🚀"
              featuredImage={rebase01}
              eventdate={"Mar 05, 2024"}
              description="Unleash your creativity and be part of Rebase<01>, a month-long online hackathon extravaganza! Check out this link for all the details and register for this great experience. https://www.rebase01.tech/"
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-rebase/cohost-vignans-institute-of-information-technology-visakhapatnam"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-from-gpt3-to-beyond-understanding-large-language-models/"
              title="From GPT3 to Beyond: Understanding LLMs"
              featuredImage={LLMs}
              eventdate={"Feb 15, 2024"}
              description="Dive into the world beyond GPT-3 with a comprehensive exploration of advanced Large Language Models (LLMs). Uncover the intricacies and applications of these cutting-edge technologies. Gain insights into the future of language processing and understanding."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-from-gpt3-to-beyond-understanding-large-language-models/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-android-accelerator-exploring-the-android-realm/"
              title="Android Accelerator: Exploring the Android Realm📲"
              featuredImage={android}
              eventdate={"Feb 06, 2024"}
              description="Dive into the dynamic world of Android app development with 'Exploring the Android Realm.' This workshop is your compass to mastering cutting-edge technologies and crafting seamless user experiences. Join us on this transformative journey and emerge ready to innovate in the Android landscape."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-android-accelerator-exploring-the-android-realm/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-getting-started-with-flutter-building-your-first-app/"
              title="Getting Started with Flutter: Building Your First App"
              featuredImage={flutter02}
              eventdate={"Oct 18, 2023"}
              description="Getting Started with Flutter: Building Your First App is a beginner-friendly session that introduces participants to the world of mobile app development using the Flutter framework. In this session, attendees will learn the fundamentals of Flutter, a popular open-source UI software development toolkit created by Google By the end of this session, participants will have built their first Flutter"
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-getting-started-with-flutter-building-your-first-app/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-design-wonderland/"
              title="Design Wonderland 🌈"
              featuredImage={uxBootcamp}
              eventdate={"Nov 24, 2023"}
              description="Embark on a transformative journey with GDSC's UI/UX design sessions. Dive into the art of crafting seamless user experiences, mastering user-centered design principles, and practical tools. Join hands-on projects, collaborate with enthusiasts, and gain insights from industry experts. Whether you're a beginner or seasoned designer, GDSC's sessions empower you to create innovative digital experience."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-design-wonderland/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-kalasalingam-academy-of-research-education-krishnankoil-presents-introduction-to-google-solution-challenge-2024/cohost-vignans-institute-of-information-technology-visakhapatnam/"
              title="Introduction to Google Solution Challenge 2024"
              featuredImage={solutionchallenge}
              eventdate={"Dec 15, 2023"}
              description="Get ready to embark on an exciting journey of learning and innovation with the Discover, Design, and Develop campaign by Google Developer Student Clubs! "
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-kalasalingam-academy-of-research-education-krishnankoil-presents-introduction-to-google-solution-challenge-2024/cohost-vignans-institute-of-information-technology-visakhapatnam/"
            />
            <EventCard
              className={`mr-6`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-open-source-amp-hands-on-git-amp-github-1/"
              title="Intro to Open Source & Hands-on Git & Github"
              eventdate={"Oct 17, 2023"}
              featuredImage={opensource}
              description="In this GDSC session, we'll explore the world of open source software development, the Git version control system, and the collaborative platform, GitHub. These three elements play a crucial role in modern software development, enabling teams to work together efficiently, contribute to projects globally, and foster innovation in the tech community."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-open-source-amp-hands-on-git-amp-github-1/"
            />
            <EventCard
              className={`mr-0`}
              link="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-inauguration-followed-by-a-session-on-flutter/"
              title="Inauguration followed by a session on Flutter"
              eventdate={"Aug 26, 2023"}
              featuredImage={flutter01}
              description="The Gdsc VIIT Info Session has arrived, and we're excited to present our past GDSC highlights. Following that, Mr. Yashwanth Kumar Rajavarapu, lead organizer of the Hyderabad Flutter community, will lead a session on Flutter. This marks the first collaboration in Vizag."
              rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-inauguration-followed-by-a-session-on-flutter/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
