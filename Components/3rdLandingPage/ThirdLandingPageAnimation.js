import React, { useEffect, useRef } from 'react';
import ThirdLandingdata from './ThirdLandingdata';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThirdLandingPageAnimation = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);  

  return (
    <div className='thirdLandingAnimationPage'>
      {ThirdLandingdata.map((current, index) => {
        return (
          <div key='index'>
            <div
              data-aos='fade-right'
              data-aos-duration='900'
              data-aos-offset='200'
              data-aos-anchor-placement='center-top'
              className='thirdLandingAnimationPageBox1'
            >
              <div className='thirdLandingAnimationPageHeading'>
                {current.Heading}
              </div>
              <div className='thirdLandingAnimationPageDescription'>
                {current.Description}
              </div>
            </div>
          </div>
        );
      })}
      <div
        className='thirdLandingAnimationPageBox2'
        data-aos='fade-left'
        data-aos-duration='900'
        data-aos-offset='200'
        data-aos-anchor-placement='center-top'
      >
        <img
          src='imgreplace.png'
          data-aos='videoTransition'
          data-aos-duration='900'
          data-aos-offset='200'
          // data-aos-anchor-placement='top-center'
        />
      </div>
    </div>
  );
};
export default ThirdLandingPageAnimation;