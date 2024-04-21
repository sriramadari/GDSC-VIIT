import MemberProfile from "@/components/MemberProfile";
import React from "react";
import pavan_meesala from '../../../public/assets/team/2023/pavan_meesala.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={pavan_meesala}
              name={`Pavan Meesala`}
              role={`Android Lead`}
              linkedin={`https://www.linkedin.com/in/meesala-pavan-kumar/`}
              github={``}
              twitter={``}
          />
      </main>
    </>
  );
};

export default Member;
