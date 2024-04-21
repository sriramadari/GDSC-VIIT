import MemberProfile from "@/components/MemberProfile";
import React from "react";
import mangipudi_v_n_s_aishwarya from '../../../public/assets/team/2023/mangipudi.v.n.s_aishwarya_5DqJ111.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={mangipudi_v_n_s_aishwarya}
              name={`Mangipudi.V.N.S Aishwarya`}
              role={`GDSC Lead`}
              about={`figma · Front-End Web Development · Computer Science - Software Engineering - Competitive Programming · AI Machine Learning Development
              `}
          />
      </main>
    </>
  );
};

export default Member;
