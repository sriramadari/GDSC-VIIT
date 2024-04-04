import React, { useRef, useEffect } from "react";
import "./events.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { ReactComponent as RecentEvents } from "../assets/RECENT EVENTS.svg";
import group1 from "../assets/events/Group 1.png";
import group2 from "../assets/events/Group 2.png";
import group3 from "../assets/events/Group 3.png";
import group4 from "../assets/events/Group 4.png";
import group5 from "../assets/events/Group 5.png";
import group6 from "../assets/events/Group 6.png";
import group7 from "../assets/events/Group 7.png";
import group8 from "../assets/events/Group 8.png";
import leftarrow from "../assets/left-arrow.svg";
import rightarrow from "../assets/right-arrow.svg";
// import group9 from "../assets/events/Group 9.png";
// import { ReactComponent as Group } from "../assets/events/Group 1.svg";
// import { ReactComponent as Seemore } from "../assets/see more.svg";

const Events = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const carouselref = useRef(null);
  const leftref = useRef(null);
  const rightref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselref.current;
        if (scrollLeft === 0) {
          leftref.current.style.display = "none";
        } else {
          leftref.current.style.display = "flex";
        }
        if (scrollLeft + clientWidth >= scrollWidth) {
          rightref.current.style.display = "none";
        } else {
          rightref.current.style.display = "flex";
        }
      }
    }

    if (carouselref.current) {
      carouselref.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carouselref.current) {
        carouselref.current.removeEventListener("scroll", handleScroll);
      }
    }
  }, [])

  const scroll = (direction) => {
    if (carouselref.current) {
      var scrollamount;
      if (direction==="left"){
        scrollamount = -300;
      }
      else if (direction==="right"){
        scrollamount = 300;
      }
      carouselref.current.scrollLeft += scrollamount;
    }
  }

  return (
    <section id="events" className="events">
      <div className="recent-events-wrapper">
        <RecentEvents className="recent-events" />
      </div>
      <div className="carousel-wrapper">
        <div className="left" ref={leftref}>
              <img src={leftarrow} onClick={() => scroll("left")} alt="left" />
        </div>
        <div className="carousel" ref={carouselref}>
          {/* <Carousel responsive={responsive}> */}
          {/* <Group className="group" /> */}
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-rebase/cohost-vignans-institute-of-information-technology-visakhapatnam">
            <img src={group1} alt="group1" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-from-gpt3-to-beyond-understanding-large-language-models/">
            <img src={group2} alt="group2" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-android-accelerator-exploring-the-android-realm/">
            <img src={group3} alt="group3" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-getting-started-with-flutter-building-your-first-app/">
            <img src={group4} alt="group4" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-design-wonderland/">
            <img src={group5} alt="group5" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-kalasalingam-academy-of-research-education-krishnankoil-presents-introduction-to-google-solution-challenge-2024/cohost-vignans-institute-of-information-technology-visakhapatnam">
            <img src={group6} alt="group6" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-intro-to-open-source-amp-hands-on-git-amp-github-1/">
            <img src={group7} alt="group7" className="events-image" />
          </a>
          <a href="https://gdsc.community.dev/events/details/developer-student-clubs-vignans-institute-of-information-technology-visakhapatnam-presents-inauguration-followed-by-a-session-on-flutter/">
            <img src={group8} alt="group8" className="events-image" />
          </a>
        </div>
        <div className="right" ref={rightref}>
          <img src={rightarrow} onClick={() => scroll("right")} alt="right"/>
        </div>
      </div>
    </section>
  );
};

export default Events;
