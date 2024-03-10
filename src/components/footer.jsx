import React from 'react'
import Gdsc from '../assets/header icon.png'
import './footer.css'

const   Footer = () => {
  return (
    <footer> 
        <div className="footer">
        <div className="footer-logo">
            <img src={Gdsc} alt="gdsc" />
        </div>
        <h1 className="social">Social</h1>
        {/* <div className="social-links">
            <a href="https://www.instagram.com/gdscviit/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/gdscviit" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
       </div> */}
        <div className="footer-text">
            <p>© GDSC-VIIT</p>
        </div>
        </div>
    </footer>
   )
}

export default Footer