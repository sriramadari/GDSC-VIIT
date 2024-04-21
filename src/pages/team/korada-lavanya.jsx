import MemberProfile from "@/components/MemberProfile";
import React from "react";
import korada_lavanya from '../../../public/assets/team/2023/korada_lavanya.jpg'

const Member = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh]">
          <MemberProfile 
              profilePic={korada_lavanya}
              name={`Korada Lavanya`}
              role={`UI/UX Lead`}
              linkedin={`https://www.linkedin.com/in/k-lavanya-kumari-399a56257`}
              github={``}
              twitter={``}
              about={`About`}
          />
      </main>
    </>
  );
};

export default Member;
