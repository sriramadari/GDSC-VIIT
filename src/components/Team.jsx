import React from "react";
import ProfileCard from "./ProfileCard";
import pavan_meesala from "../../public/assets/team/2023/pavan_meesala.jpg";
import korada_lavanya from "../../public/assets/team/2023/korada_lavanya.jpg";
import aditya_rompella from "../../public/assets/team/2023/aditya_rompella.jpg";
import sanjay_varma from "../../public/assets/team/2023/sanjay_varma_p9IkfZi.jpg";
import ravi_teeja_kamsu from "../../public/assets/team/2023/ravi_teeja_kamsu.jpg";
import sriram_adari from "../../public/assets/team/2023/sriram_adari_QdA3Hk5.jpg";
import mohith_vishal from "../../public/assets/team/2023/mohith_vishal_gS9tT88.jpg";
import mehrun_shamshi from "../../public/assets/team/2023/mehrun_shamshi_x99oX40.jpg";
import kadali_mounika_mehar from "../../public/assets/team/2023/kadali_mounika_mehar.jpg";
import manasvi_ramana_sai from "../../public/assets/team/2023/manasvi_ramana_sai_LOmxAYF.jpg";
import srujan_kuchibhotla from "../../public/assets/team/2023/srujan_kuchibhotla_HBL9OCS.jpg";
import malakala_suhas_badrinath from "../../public/assets/team/2023/malakala_suhas_badrinath_9cZQOJS.jpg";
import mangipudi_v_n_s_aishwarya from "../../public/assets/team/2023/mangipudi.v.n.s_aishwarya_5DqJ111.jpg";

const Team = () => {
  return (
    <>
      <div className="container mx-auto my-20 px-8">
        <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 gap-4 items-center px-80 sm:px-0">

        {/* team members of 2023 */}
          <ProfileCard
            href="/team/mangipudi-v-n-s-aishwarya/"
            profilePic={mangipudi_v_n_s_aishwarya}
            name={`Mangipudi.V.N.S Aishwarya`}
            role={`GDSC Lead`}
            linkedin={`https://www.linkedin.com/in/aishwarya-mangipudi-8b35b2158/`}
            github={``}
            twitter={``}
            className={`w-[400px] sm:w-[350px]`}
          />
          <ProfileCard
            href="/team/ravi-teeja-kamsu/"
            profilePic={ravi_teeja_kamsu}
            name={`Ravi Teeja Kamsu`}
            role={`Co-Lead`}
            linkedin={`https://www.linkedin.com/in/kamsu-ravi-teeja/`}
            github={``}
            twitter={``}
            className={`w-[400px] sm:w-[350px]`}
          />
        </div>
        <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 items-center px-40 sm:px-0">
          <ProfileCard
            href="/team/pavan-meesala"
            profilePic={pavan_meesala}
            name={`Pavan Meesala`}
            role={`Android Lead`}
            linkedin={`https://www.linkedin.com/in/meesala-pavan-kumar/`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/kadali-mounika-mehar"
            profilePic={kadali_mounika_mehar}
            name={`Kadali Mounika Mehar`}
            role={`Machine Learning Lead`}
            linkedin={`https://www.linkedin.com/in/mounika-mehar-0545a7227/`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/sriram-adari"
            profilePic={sriram_adari}
            name={`Sriram Adari`}
            role={`Web Development Lead`}
            linkedin={`https://www.linkedin.com/in/sriram-adari-577649242/`}
            github={``}
            twitter={``}
          />
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-80 sm:px-0">
          <ProfileCard
            href="/team/korada-lavanya"
            profilePic={korada_lavanya}
            name={`Korada Lavanya`}
            role={`UI/UX Lead`}
            linkedin={`https://www.linkedin.com/in/k-lavanya-kumari-399a56257`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/manasvi-ramana-sai"
            profilePic={manasvi_ramana_sai}
            name={`Manasvi Ramana Sai`}
            role={`Graphic Design Lead`}
            linkedin={`https://www.linkedin.com/in/manasviramanasai/`}
            github={``}
            twitter={``}
          />
        </div>
        <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-40 sm:px-0">
          <ProfileCard
            href="/team/mehrun-shamshi"
            profilePic={mehrun_shamshi}
            name={`Mehrun Shamshi`}
            role={`Public Relations`}
            linkedin={`https://www.linkedin.com/in/mehrun-shamshi-879191253/`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/malakala-suhas-badrinath"
            profilePic={malakala_suhas_badrinath}
            name={`Malakala Suhas Badrinath`}
            role={`Content Lead`}
            linkedin={`https://www.linkedin.com/in/malakala-suhas-badrinath-355532252/`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/srujan-kuchibhotla"
            profilePic={srujan_kuchibhotla}
            name={`Srujan Kuchibhotla`}
            role={`Video Editing Lead`}
            linkedin={`https://www.linkedin.com/in/srujan-k-991837255/`}
            github={``}
            twitter={``}
          />
        </div>
        <div className="grid grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 gap-4 items-center px-40 sm:px-0">
          <ProfileCard
            href="/team/aditya-rompella"
            profilePic={aditya_rompella}
            name={`Aditya Sai Rompella`}
            role={`Event Management Lead`}
            linkedin={`https://www.linkedin.com/in/aditya-sai-rompella-3006a125a/`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/mohith-vishal"
            profilePic={mohith_vishal}
            name={`Mohith Vishal`}
            role={`Event Management Lead`}
            linkedin={`https://www.linkedin.com/in/mohith-vishal-22620a214/`}
            github={``}
            twitter={``}
          />
          <ProfileCard
            href="/team/sanjay-varma"
            profilePic={sanjay_varma}
            name={`Sanjay Varma`}
            role={`Social Media Lead`}
            linkedin={`https://www.linkedin.com/in/sanjay-varma-5b7800228/`}
            github={``}
            twitter={``}
          />
        </div>
      </div>
    </>
  );
};

export default Team;
