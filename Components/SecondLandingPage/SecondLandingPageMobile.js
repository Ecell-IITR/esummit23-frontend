import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondLandingPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      <div className='secondLandingPageMobile' style={{}}>
        <img
          className='secondLandingPageMobileBackground'
          src='mob-2ndanimation.webp'
        />
        <div
          className='secondLandingPageMobileBox'
          style={{ marginTop: '-700px', paddingRight: '25px' }}
        >
          <div className='secondLandingPageMobileHeading'>About E-Summit</div>
          <div
            id='about'
            className='secondLandingPageMobileDescription1'
            style={{ paddingBottom: '24px' }}
          >
            We are excited to announce the upcoming Esummit IIT Roorkee, an
            event bringing together entrepreneurs, investors, and industry
            leaders from around the world. This year's Esummit is extra special
            as we are celebrating the 175th year of IIT Roorkee. We believe that
            the Esummit will be a valuable platform for startups to showcase
            their innovative ideas and build relationships with key players in
            the industry
          </div>
          <div
            className='secondLandingPageMobileDescription1'
            style={{ paddingBottom: '56px' }}
          >
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community,{' '}
          </div>
          <button className='secondLandingPageMobileButton'>
            <span>KNOW MORE</span>
          </button>
        </div>
      </div>
      <div
        className='mobileWheel'
        style={{ display: 'flex', marginTop: '-50%', mixBlendMode: 'overlay' }}
      >
        <img src='mobwheel.webp' style={{ width: '100vw', height: '100vw' }} />
      </div>
    </>
  );
};

export default SecondLandingPage;
