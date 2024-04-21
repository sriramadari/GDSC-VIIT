import MemberProfile from "@/components/MemberProfile";
import React from "react";
import sanjay_varma from '../../../public/assets/team/2023/sanjay_varma_p9IkfZi.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={sanjay_varma}
              name={`Sanjay Varma`}
              role={`Social Media Lead`}
              linkedin={`https://www.linkedin.com/in/sanjay-varma-5b7800228/`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
