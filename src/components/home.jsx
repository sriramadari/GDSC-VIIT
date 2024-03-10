import React from "react";
import weAreGDSC from "../assets/weAreGdsc.png";
import Play from "../assets/image.png";
import { ReactComponent as Checkout } from "../assets/checkout.svg";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src={weAreGDSC} alt="we are GDSC" />
        <div className="hero-para-div">
          <p className="hero-para">
            Through workshops, mentorship programs, and knowledge exchange
            sessions, we aim to create a community that values continuous growth
            and sharing of expertise.
          </p>
          <div className="hero-button">
            <a
              href="https://gdsc.community.dev/vignans-institute-of-information-technology-visakhapatnam/"
              target="_blank"
              rel="noreferrer"
            >
              <Checkout />
            </a>
          </div>
        </div>
      </div>
      <div className="play">
        <img src={Play} alt="Play GDSC" />
      </div>
    </section>
  );
};

export default Home;
