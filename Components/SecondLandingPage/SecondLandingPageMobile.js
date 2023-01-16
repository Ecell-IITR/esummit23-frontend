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
            className='secondLandingPageMobileDescription1'
            style={{ paddingBottom: '24px' }}
          >
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds.
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
