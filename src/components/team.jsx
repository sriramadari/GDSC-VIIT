import React from "react";
import { ReactComponent as TeamImage } from "../assets/Meet the team.svg";
import "./team.css";
import Aishwarya from "../assets/team/aishwarya.png";
import Ravi from "../assets/team/ravi.png";
import Sriramadari from "../assets/team/sriramadari.png";
import Pavan from "../assets/team/pavan.png";
import Mounika from "../assets/team/mounika.png";
import Lavanya from "../assets/team/lavanya.png";
import Ramana from "../assets/team/ramana.png";
import Mehrun from "../assets/team/mehrun.png";
import Suhas from "../assets/team/suhas.png";
import Aditya from "../assets/team/aditya.png";
import mohit from "../assets/team/mohith.png";
import Sanjay from "../assets/team/sanjay.png";
import Srujan from "../assets/team/srujan.png";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="meet-the-team">
        <TeamImage className="team-image" />
      </div>
      <div className="team-members">
        <div className="leads main-leads">
          <div className="team-member">
            <a href="https://www.linkedin.com/in/aishwarya-mangipudi-8b35b2158/">
              <img src={Aishwarya} alt="Aishwarya" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/kamsu-ravi-teeja/">
              <img src={Ravi} alt="Ravi" />
            </a>
          </div>
        </div>
        <div className="leads tech-leads">
          <div className="team-member">
            <a href="https://www.linkedin.com/in/meesala-pavan-kumar/">
              <img src={Pavan} alt="Pavan" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/mounika-mehar-0545a7227/">
              <img src={Mounika} alt="Mounika" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/sriram-adari-577649242/">
              <img src={Sriramadari} alt="Sriram" />
            </a>
          </div>
        </div>
        <div className="leads design-lead">
          <div className="team-member">
            <a href="https://www.linkedin.com/in/k-lavanya-kumari-399a56257/">
              <img src={Lavanya} alt="Lavanya" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/manasviramanasai/">
              <img src={Ramana} alt="Ramana" />
            </a>
          </div>
        </div>
        <div className="leads editorial-leads">
          <div className="team-member">
            <a href="https://www.linkedin.com/in/mehrun-shamshi-879191253/">
              <img src={Mehrun} alt="Mehrun" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/malakala-suhas-badrinath-355532252/">
              <img src={Suhas} alt="Suhas" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/srujan-k-991837255/">
              <img src={Srujan} alt="Srujan" />
            </a>
          </div>
        </div>

        <div className="leads management-leads">
          <div className="team-member">
            <a href="https://www.linkedin.com/in/aditya-sai-rompella-3006a125a/">
              <img src={Aditya} alt="Aditya" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/mohith-vishal-22620a214/">
              <img src={mohit} alt="mohit" />
            </a>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/sanjay-varma-5b7800228/">
              <img src={Sanjay} alt="Sanjay" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
