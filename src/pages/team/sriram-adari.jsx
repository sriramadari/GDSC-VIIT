import MemberProfile from "@/components/MemberProfile";
import React from "react";
import sriram_adari from '../../../public/assets/team/2023/sriram_adari_QdA3Hk5.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={sriram_adari}
              name={`Sriram Adari`}
              role={`Web Development Lead`}
              linkedin={`https://www.linkedin.com/in/sriram-adari-577649242/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
