import MemberProfile from "@/components/MemberProfile";
import React from "react";
import mohith_vishal from '../../../public/assets/team/2023/mohith_vishal_gS9tT88.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={mohith_vishal}
              name={`Mohith Vishal`}
              role={`Event Management Lead`}
              linkedin={`https://www.linkedin.com/in/mohith-vishal-22620a214/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
