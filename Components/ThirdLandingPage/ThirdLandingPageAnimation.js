import React, { useEffect, useRef, useState } from 'react';
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
              data-aos-anchor-placement='top-center'
              className='thirdLandingAnimationPageBox1'
            >
              <div
                className='thirdLandingAnimationPageHeading'
                style={{ width: '40vw' }}
              >
                {/* {current.Heading} */}
                REMINSCING THE ETHOS:{' '}
                <span style={{ color: '#FFD685' }}>BHARAT</span>
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
        data-aos-anchor-placement='top-bottom'
        style={{ width: '40vw' }}
      >
        <a href='https://www.youtube.com/embed/3TJs2KjpxXc'>
          <div
            data-aos='videoTransition'
            data-aos-duration='900'
            data-aos-offset='200'
            data-aos-anchor-placement='top-bottom'
            style={{ width: '41vw' }}
          >
            <img
              className='thirdAnimationVideo'
              width='100%'
              // height='400px'
              // src='https://www.youtube.com/embed/3TJs2KjpxXc'
              src='thirdLandingImage.png'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
};
export default ThirdLandingPageAnimation;
