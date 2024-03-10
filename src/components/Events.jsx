import React, { useState } from 'react'
import './events.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ReactComponent as RecentEvents } from '../assets/RECENT EVENTS.svg'
import group1 from '../assets/events/Group 1.png'
import group2 from '../assets/events/Group 2.png'
import group3 from '../assets/events/Group 3.png'
import group4 from '../assets/events/Group 4.png'
import group5 from '../assets/events/Group 5.png'
import group6 from '../assets/events/Group 6.png'
import group7 from '../assets/events/Group 7.png'
import group8 from '../assets/events/Group 8.png'
import group9 from '../assets/events/Group 9.png'
import { ReactComponent as Group } from '../assets/events/Group 1.svg'
import { ReactComponent as Seemore } from '../assets/see more.svg'

const Events = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
   <section id="events" className="events">
    <div className="recent-events-wrapper">
          <RecentEvents className="recent-events" />
    </div>
    <div className="carousel"> 
    {/* <Carousel responsive={responsive}> */}
        {/* <Group className="group" /> */}
        <a href='#'><img src={group1} alt="group1" className="events-image" /></a>
        <a href='#'><img src={group2} alt="group2" className="events-image" /></a>
        <a href='#'><img src={group3} alt="group3" className="events-image" /></a>
        <a href='#'><img src={group4} alt="group4" className="events-image" /></a>
        <a href='#'><img src={group5} alt="group5" className="events-image" /></a>
        <a href='#'><img src={group6} alt="group6" className="events-image" /></a>
        <a href='#'><img src={group7} alt="group7" className="events-image" /></a>
        <a href='#'><img src={group8} alt="group8" className="events-image" /></a>
        <a href='#'><img src={group9} alt="group9" className="events-image" /></a>
      {/* </Carousel> */}
      </div>
   </section>
  )
}

export default Events