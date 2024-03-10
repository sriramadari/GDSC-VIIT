import React from 'react'
import './events.css'
import { ReactComponent as RecentEvents } from '../assets/RECENT EVENTS.svg'
import group1 from '../assets/events/Group 1.png'
import group2 from '../assets/events/Group 2.png'
import group3 from '../assets/events/Group 3.png'
import { ReactComponent as Group } from '../assets/events/Group 1.svg'
import { ReactComponent as Seemore } from '../assets/see more.svg'

const Events = () => {
  return (
   <section className="events">
    <div className="recent-events-wrapper">
          <RecentEvents className="recent-events" />
    </div>
    <div className="events-wrapper"> 
        {/* <Group className="group" /> */}
        <a href='#'><img src={group1} alt="group1" className="events-image" /></a>
        <a href='#'><img src={group2} alt="group2" className="events-image" /></a>
        <a href='#'><img src={group3} alt="group3" className="events-image" /></a>
    </div>
    <div className="seemore">
     <button className="seemore-btn" >
        <Seemore />
    </button>
    </div>
   </section>
  )
}

export default Events