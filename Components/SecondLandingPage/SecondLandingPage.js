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
            data-aos-offset='100'
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
            data-aos-anchor-placement='top-bottom'
            data-aos-duration='1450'
            data-aos-offset='250'
          >
            <div id='about' className='secondLandingPageHead'>
              About Esummit IIT Roorkee
            </div>
            <div className='secondLandingPageDescription'>
              We are excited to announce the upcoming Esummit IIT Roorkee, an
              event bringing together entrepreneurs, investors, and industry
              leaders from around the world. This year's Esummit is extra
              special as we are celebrating the 175th year of IIT Roorkee. We
              believe that the Esummit will be a valuable platform for startups
              to showcase their innovative ideas and build relationships with
              key players in the industry
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
