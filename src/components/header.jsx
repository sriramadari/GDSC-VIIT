import { Link } from 'react-scroll'
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
              <Link activeClass="" to='home' spy={true} smooth={true} offset={-70} duration={500} className="a" onClick={openNav}>HOME</Link>
              <Link activeClass='active' to='events' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav}  className="a" >EVENTS</Link>
              <Link activeClass='active' to='hackthon' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav} className="a" >HACKTHON</Link>
              <Link activeClass='active' to='team' spy={true} smooth={true} offset={-70} duration={500} onClick={openNav}  className="a" >TEAM</Link>
              <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-70} duration={500}  onClick={openNav} className="a" >CONTACT US</Link>
          <button className="nav-button nav-close" onClick={openNav}><Close /></button>
        </nav>
        <button className="nav-button" onClick={openNav}><Menu/></button>
        
    </header>
  )
}

export default Header