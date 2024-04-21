import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import GDSCVIIT from '../../public/assets/google-developers-seeklogo.svg'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group text-lg`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light`}></span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-dark`}></span>
    </button>
  )
}

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handlePopupClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, []);

  return (
    <header
      className='w-full px-10 py-6 font-medium flex items-center justify-between
      dark:text-light relative z-50 lg:px-16 md:px-12 sm:px-6 sm:border-b-0 border-b-[0.5px] border-solid border-dark dark:border-light'
    >
      {/* Desktop navbar logo */}
      <div className='w-full flex justify-between items-center'  onClick={handlePopupClick}>
      <Link href="/">
        <div className='flex flex-row items-center justify-center '>
          <span className='pr-2'><Image src={GDSCVIIT} alt="GDSC-VIIT"/></span>
          <div className='text-dark dark:text-light lg:flex flex-col items-start justify-center hidden'>
            <div className='text-[15px]'><span className=''>GDSC</span> VIIT</div>
          </div>
          <div className='text-dark dark:text-light flex flex-col items-start justify-center lg:hidden'>
            <div className='text-[15px]'><span className=''>Google</span> Developer Student Clubs</div>
            <div className='text-[12px]'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
          </div>
        </div>
        </Link>

        {/* Desktop navbar links */}
        <nav className='lg:hidden flex items-end justify-end flex-wrap'>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/team" title="Team" className='mx-4' />
          <CustomLink href="/events" title="Events" className='mx-4' />
          <CustomLink href="/hackathons" title="Hackathons" className='ml-4' />
          <div className='flex items-center justify-center pb-[2px]'>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 ml-6 flex items-center justify-center  rounded-full p-[0.2rem] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {
              mode === "dark"
                ? <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
            }
          </button></div>
        </nav>

      </div>

      <button className='popup hide flex-col justify-end items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 -translate-y-0.5' : 'translate-y-0.5'}`}></span>
      </button>
      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[80vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/65 dark:bg-light/65 rounded-lg backdrop-blur-md py-32'>

            {/* Mobile Navbar logo */}
            <nav className='flex items-center flex-col justify-center pb-5 '>
                <Link href="/">
                <div className='flex flex-col items-center justify-center pb-5'>
                    <Image src={GDSCVIIT} alt="GDSC-VIIT"/>
                    <div className='text-light dark:text-dark flex flex-col items-center justify-center'>
                      <div className='md:text-[20px] sm:text-[15px] lg:text-[20px]'>Google Developer Student Clubs</div>
                      <div className='lg:text-[15px] md:text-[10px] sm:text-[6px]'>Vignan&apos;s Institute of Information Technology - Visakhapatnam</div>
                    </div>
                </div>
                </Link>
              <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
              <CustomMobileLink href="/team" title="Team" className='' toggle={handleClick} />
              <CustomMobileLink href="/events" title="Events" className='' toggle={handleClick} />
              <CustomMobileLink href="/hackathons" title="Hackathons" className='' toggle={handleClick} />
            </nav>

            {/* Mobile Navbar socials */}
            <nav className='flex items-center justify-center flex-wrap mt-2'>
              <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mx-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a href="https://twitter.com" target={"_blank"}
                className="w-6 mr-3 sm:mx-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon />
              </motion.a>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-6 ml-6 sm:mx-1 flex items-center justify-center rounded-full p-[0.2rem] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              >
                {
                  mode === "dark"
                    ? <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div>
          : null
      }
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      </div>
    </header>
  )
}

export default Navbar