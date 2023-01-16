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
    <>
      <div>
        <div className='secondLandingPage'>
          <img src='secondLP.webp' width='100%' height='100%' />


          <div
            className='secondLandingPageImg'
            data-aos-anchor-placement='top-bottom'
            data-aos='fade-right'
            data-aos-duration='550'
            data-aos-offset='200'
            style={{ mixBlendMode: 'overlay' }}
          >
            <img
              src='wheel.webp'
              data-aos='rotate-c'
              data-aos-duration='850'
              data-aos-anchor-placement='center-center'
              data-aos-offset='200'
              className='secondLandingPagewheel'
            />
          </div>


          <div
            className='secondLandingPageBox'
            data-aos='fade-right'
            data-aos-anchor-placement='top-center'
            data-aos-duration='850'
            data-aos-offset='250'
          >
            <div className='secondLandingPageHead'>
              REMINISCING THE ETHOS : BHARAT
            </div>
            <div className='secondLandingPageDescription'>
              E-Summit being the flagship event of ECell, is held annually
              brings together the academic community, venture capitalists, new
              age entrepreneurs and all those passionate about entrepreneurship
              to common grounds.E-Summit being the flagship event of ECell, is
              held annually brings together the academic community
            </div>
            <button className='secondLandingPageButton'>
              <span>KNOW MORE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondLandingPage;
