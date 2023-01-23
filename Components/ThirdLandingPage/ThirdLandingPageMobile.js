import React, { useEffect, useState } from 'react';

const ThirdLandingPage = () => {
  return (
    <>
      <div className='ThirdLandingAnimationPageMobile'>
        <div>
          <a href='https://www.youtube.com/embed/3TJs2KjpxXc'>
            <div style={{ width: '90vw' }}>
              <img
                width='100%'
                style={{ width: '90vw' }}
                // height="100"
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
        <div className='ThirdLandingAnimationPageMobileBox'>
          <div className='ThirdLandingAnimationPageMobileHeading'>
            REMINISCING THE ETHOS:
            <span style={{ color: ' #FFD685' }}>BHARAT</span>
          </div>

          <div className='ThirdLandingAnimationPageMobileDescription'>
            E-Summit being the flagship event of ECell, is held annually brings
            together the academic community, venture capitalists, new age
            entrepreneurs and all those passionate about entrepreneurship to
            common grounds.
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdLandingPage;
