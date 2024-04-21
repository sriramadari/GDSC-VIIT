import MemberProfile from "@/components/MemberProfile";
import React from "react";
import mehrun_shamshi from '../../../public/assets/team/2023/mehrun_shamshi_x99oX40.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={mehrun_shamshi}
              name={`Mehrun Shamshi`}
              role={`Public Relations`}
              linkedin={`https://www.linkedin.com/in/mehrun-shamshi-879191253/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
