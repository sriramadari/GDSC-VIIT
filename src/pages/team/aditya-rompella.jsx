import MemberProfile from "@/components/MemberProfile";
import React from "react";
import aditya_rompella from '../../../public/assets/team/2023/aditya_rompella.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={aditya_rompella}
              name={`Aditya Sai Rompella`}
              role={`Event Management Lead`}
              linkedin={`https://www.linkedin.com/in/aditya-sai-rompella-3006a125a/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
