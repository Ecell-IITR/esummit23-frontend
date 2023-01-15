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
              <div
                className='thirdLandingAnimationPageHeading'
                style={{ width: '40vw' }}
              >
                {current.Heading}
              </div>
              <div className='thirdLandingAnimationPageDescription'>
                {current.Description1}
              </div>
              <div className='thirdLandingAnimationPageDescription'>
                {current.Description2}
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
        style={{ width: '40vw' }}
      >
        <div
          src='imgreplace.png'
          data-aos='videoTransition'
          data-aos-duration='900'
          data-aos-offset='200'
          data-aos-anchor-placement='center-top'
          style={{ width: '41vw' }}
        >
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/3TJs2KjpxXc'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ThirdLandingPageAnimation;
