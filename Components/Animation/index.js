import React, { useEffect } from 'react';

import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

import Animation from '../Animation/AnimationDesktop/AnimationDown';
import AnimationUp from '../Animation/AnimationDesktop/AnimationUp';


import Navbar from '../Navbar';
const SecondLandingPage = () => {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  });
  console.log(useMobile().isMobile);
  if (useMobile().isMobile) {
    return (
      <div
        style={{
          backgroundSize: '100vw',
          backgroundImage: 'url(/mblp.png)',
        }}
        className='containerAnimationMobile'
      >
        <Navbar/>
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
      ><Navbar/>
        <AnimationUp />
        <Animation />
      
      </div>
    );
  }
};

export default SecondLandingPage;
