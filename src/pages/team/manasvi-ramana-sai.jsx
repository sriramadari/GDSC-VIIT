import MemberProfile from "@/components/MemberProfile";
import React from "react";
import manasvi_ramana_sai from '../../../public/assets/team/2023/manasvi_ramana_sai_LOmxAYF.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={manasvi_ramana_sai}
              name={`Manasvi Ramana Sai`}
              role={`Graphic Design Lead`}
              linkedin={`https://www.linkedin.com/in/manasviramanasai/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
