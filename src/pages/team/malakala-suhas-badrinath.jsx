import MemberProfile from "@/components/MemberProfile";
import React from "react";
import malakala_suhas_badrinath from '../../../public/assets/team/2023/malakala_suhas_badrinath_9cZQOJS.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={malakala_suhas_badrinath}
              name={`Malakala Suhas Badrinath`}
              role={`Content Lead`}
              linkedin={`https://www.linkedin.com/in/malakala-suhas-badrinath-355532252/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
