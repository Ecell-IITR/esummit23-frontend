import React, { useEffect } from 'react';
import sLPData from './sLPData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondLandingPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className='secondLandingPage'>
        <img src='secondLP.webp' width="100%" />
        <div
          className='secondLandingPageImg'
          data-aos-anchor-placement='top-center'
          data-aos='fade-right'
          data-aos-duration='850'
          
          style={{ mixBlendMode: 'overlay' }}
        >
          <img
            src='wheel.webp'
            data-aos='rotate-c'
            data-aos-duration='850'
            data-aos-anchor-placement='center-top'
            data-aos-offset='50'
            // data-aos-easing='ease-in-sine'
            className='secondLandingPagewheel'
          />
        </div>
        {sLPData.map((current, index) => {
          return (
            <div
              className='secondLandingPageBox'
              key='index'
              data-aos='fade-right'
              data-aos-anchor-placement='center-top'
              data-aos-duration='850'
            >
              <div className='secondLandingPageHead'>{current.Heading}</div>
              <div className='secondLandingPageDescription'>
                {current.Description}
              </div>
              <button className='secondLandingPageButton'>
                <span>KNOW MORE</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondLandingPage;
