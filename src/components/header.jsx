import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { ReactComponent as OnlyLogo } from '../assets/small-logo.svg'
import { ReactComponent as Gdsc } from '../assets/logo.svg'
import { ReactComponent as Menu } from '../assets/menuOpen.svg'
import { ReactComponent as Close } from '../assets/close.svg'


const Header = () => {
    const ref=useRef()
    const openNav=()=>{
        ref.current.classList.toggle("open");
    }
  return (
    <header>
        <Gdsc className="logo"/>
        <OnlyLogo className="small-logo"/>
        <nav className="nav-elements" ref={ref}>
              <NavLink className="a" to="/">HOME</NavLink>
              <NavLink className="a" to="/events">EVENTS</NavLink>
              <NavLink className="a" to="/hackthon">HACKTHON</NavLink>
              <NavLink className="a" to="/team">TEAM</NavLink>
              <NavLink className="a" to="/contact">CONTACT US</NavLink>
          <button className="nav-button nav-close" onClick={openNav}><Close /></button>
        </nav>
        <button className="nav-button" onClick={openNav}><Menu/></button>
        
    </header>
  )
}

export default Header