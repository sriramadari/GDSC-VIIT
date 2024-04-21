import gsap from 'gsap';
import Image from 'next/image'
import '@/styles/Hero.module.css'
import React, { useEffect } from 'react';
import gdscViit from '../../public/assets/GDSC-VIIT.png'

//! working on new animaitons so do not delete of change this file

const MyComponent = () => {

    useEffect(() => {
        const startLoader = () => {
            let counterElement = document.querySelector(".counter");
            let currentValue = 0;

            function updateCounter() {
                if (currentValue === 100) {
                    return;
                }

                currentValue += Math.floor(Math.random() * 10) + 1;
                if (currentValue > 100) {
                    currentValue = 100;
                }

                counterElement.textContent = currentValue;

                let delay = Math.floor(Math.random() * 200) + 50;
                setTimeout(updateCounter, delay);
            }

            updateCounter();
        }
        startLoader();

        gsap.to(".counter", 0.25, {
            delay: 3.5,
            opacity: 0,
        });

        gsap.to(".bar", 1.5, {
            delay: 3.5,
            height: 0,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut",
        });

        gsap.from(".h1", 1.5, {
            delay: 4,
            y: 700,
            stagger: {
                amount: 0.5,
            },
            ease: "power4.inOut",
        });
        gsap.from(".hero", 2 , {
            delay: 4.5,
            y: 400,
            ease: "power4.inOut",
        });

    }, []);

    return (
        <div className='text-light dark:text-dark'>
            <h1 className="counter">0</h1>
            <div className="overlay">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="bar"></div>
                ))}
            </div>
            <div className="container">
                {/* <nav id='nav-test'>
                    <div>
                        <a href="#">About</a>
                        <a href="#">Content</a>
                    </div>
                    <div>
                        <a href="#">Playground</a>
                    </div>
                </nav> */}
                <div className="header">
                    <div className="h1">G</div>
                    <div className="h1">D</div>
                    <div className="h1">S</div>
                    <div className="h1">C</div>
                    <div className="h1">&nbsp;</div>
                    <div className="h1">V</div>
                    <div className="h1">I</div>
                    <div className="h1">I</div>
                    <div className="h1">T</div>
                </div>
                <div className="hero">
                    <Image id="hero-img" src={gdscViit} alt="gdsc-viit" />
                </div>
            </div>
        </div>
    );
}

export default MyComponent;


// import Head from 'next/head';
// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import gsap from 'gsap';
// import gdscViit from '../../public/assets/GDSC-VIIT.png';
// import Events from '@/components/Events';
// import Team from '@/components/Team';

// export default function Home() {
//   const headerRef = useRef(null);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const headerElements = headerRef.current.querySelectorAll('.h1');
//     const heroElement = heroRef.current;

//     gsap.from(headerElements, {
//       duration: 1.5,
//       y: 800,
//       stagger: 0.5,
//       ease: 'power4.inOut',
//     });

//     gsap.from(heroElement, {
//       duration: 2,
//       y: 700,
//       ease: 'power4.inOut',
//     });
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>GDSC VIIT | Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam</title>
//         <meta name="description" content="Google Developer Student Clubs Vignan's Institute of Information Technology - Visakhapatnam | Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome." />
//         <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_32,q_auto:good,w_32/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="32x32" />
//         <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_192,q_auto:good,w_192/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="192x192" />
//         <link rel="icon" type="image/png" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_16,q_auto:good,w_16/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" sizes="16x16" />
//         <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png" />
//       </Head>
//       <main className='text-dark dark:text-light'>
//         <div ref={headerRef} className="header sm:py-10 font-extrabold">
//           <div className="h1">G</div>
//           <div className="h1">D</div>
//           <div className="h1">S</div>
//           <div className="h1">C</div>
//           <div className="h1">&nbsp;</div>
//           <div className="h1">V</div>
//           <div className="h1">I</div>
//           <div className="h1">I</div>
//           <div className="h1">T</div>
//         </div>
//         <div ref={heroRef} className="hero">
//           <Image src={gdscViit} alt="gdsc-viit" className='rounded-lg' />
//         </div>
//         <div className='pt-20 sm:pt-10'>
//           <h1 className='container font-extrabold uppercase lg:text-3xl text-[70px] flex items-center justify-center py-8'>
//             Recent Events
//           </h1>
//           <Events />
//           <h1 className='container font-extrabold uppercase lg:text-3xl text-[70px] flex items-center justify-center mt-40'>
//             Meet the Team
//           </h1>
//           <Team />
//         </div>
//       </main>
//     </>
//   );
// }
