import MemberProfile from "@/components/MemberProfile";
import React from "react";
import srujan_kuchibhotla from '../../../public/assets/team/2023/srujan_kuchibhotla_HBL9OCS.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={srujan_kuchibhotla}
              name={`Srujan Kuchibhotla`}
              role={`Video Editing Lead`}
              linkedin={`https://www.linkedin.com/in/srujan-k-991837255/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
