import MemberProfile from "@/components/MemberProfile";
import React from "react";
import kadali_mounika_mehar from '../../../public/assets/team/2023/kadali_mounika_mehar.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={kadali_mounika_mehar}
              name={`Kadali Mounika Mehar`}
              role={`Machine Learning Lead`}
              linkedin={`https://www.linkedin.com/in/mounika-mehar-0545a7227/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
