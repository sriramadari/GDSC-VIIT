import MemberProfile from "@/components/MemberProfile";
import React from "react";
import ravi_teeja_kamsu from '../../../public/assets/team/2023/ravi_teeja_kamsu.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
             profilePic={ravi_teeja_kamsu}
             name={`Ravi Teeja Kamsu`}
             role={`Co-Lead`}
             linkedin={`https://www.linkedin.com/in/kamsu-ravi-teeja/`}
             github={``}
             twitter={``}
             about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
