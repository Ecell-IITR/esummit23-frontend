import React, { useEffect, useState } from 'react';

import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

import Animation from '../Animation/AnimationDesktop/AnimationDown';
import AnimationUp from '../Animation/AnimationDesktop/AnimationUp';

import Navbar from '../Navbar';
const SecondLandingPage = () => {
  const [width, setwidth] = useState(300);
  const [height, setheight] = useState(20);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 420) {
        setwidth(window.innerWidth / 6);
        setheight(window.innerWidth / 3);
      } else {
        setwidth(window.innerWidth / 5);
        setheight(window.innerWidth / 4.5);
      }
    });
    if (window) {
      if (window.innerWidth < 420) {
        setwidth(window.innerWidth / 6);
        setheight(window.innerWidth / 3);
      } else {
        setwidth(window.innerWidth / 5);
        setheight(window.innerWidth / 4.5);
      }
    }
  }, []);

  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  });
  if (useMobile().isMobile) {
    return (
      <div
        style={{
          backgroundImage: 'url(/mblp.png)',
          height: `${height}vh`,
          backgroundSize: `${100}vw ${height}vh`,
        }}
        className='containerAnimationMobile'
      >
        <Navbar />
        {/* <img src='/mblp.png'/> */}
      </div>
    );
  } else {
    return (
      <div
        className='parentAnimation'
        style={{
          backgroundColor:
            'linear-gradient(180deg, #12100E 11%, rgba(46, 40, 34, 0.75) 120.26%)',
        }}
      >
        <Navbar />
        <AnimationUp/>
        <Animation/>
      </div>
    );
  }
};

export default SecondLandingPage;
