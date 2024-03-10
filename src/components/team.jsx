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
            <img src={Aishwarya} alt="Aishwarya" />
          </div>
          <div className="team-member">
            <img src={Ravi} alt="Ravi" />
          </div>
        </div>
        <div className="leads tech-leads">
          <div className="team-member">
            <img src={Pavan} alt="Pavan" />
          </div>
          <div className="team-member">
            <img src={Mounika} alt="Mounika" />
          </div>
          <div className="team-member">
            <img src={Sriramadari} alt="Sriramadari" />
          </div>
        </div>
        <div className="leads design-lead">
          <div className="team-member">
            <img src={Lavanya} alt="Lavanya" />
          </div>
          <div className="team-member">
            <img src={Ramana} alt="Ramana" />
          </div>
        </div>
        <div className="leads editorial-leads">
          <div className="team-member">
            <img src={Mehrun} alt="Mehrun" />
          </div>
          <div className="team-member">
            <img src={Suhas} alt="Suhas" />
          </div>
          <div className="team-member">
            <img src={Srujan} alt="srujan" />
          </div>
        </div>

        <div className="leads management-leads">
          <div className="team-member">
            <img src={Aditya} alt="Aditya" />
          </div>
          <div className="team-member">
            <img src={mohit} alt="mohit" />
          </div>
          <div className="team-member">
            <img src={Sanjay} alt="Sanjay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
