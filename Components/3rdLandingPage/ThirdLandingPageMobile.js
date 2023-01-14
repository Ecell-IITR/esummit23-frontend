import React, { useEffect } from 'react';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

const SecondLandingPage = () => {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  });
  console.log(useMobile().isMobile);
  if (useMobile().isMobile) {
    return (
      <>
        <div className='ThirdLandingAnimationPageMobile'>
            <div >
          <img src='mob3rdimg.webp' style={{width:"90vw"}} />
          </div>
          <div className='ThirdLandingAnimationPageMobileBox'>
            <div className='ThirdLandingAnimationPageMobileHeading'>REMINSCING THE ETHOS:<span style={{color:" #FFD685"}}>BHARAT</span></div>
            
            <div className='ThirdLandingAnimationPageMobileDescription'>
              E-Summit being the flagship event of ECell, is held annually
              brings together the academic community, venture capitalists, new
              age entrepreneurs and all those passionate about entrepreneurship
              to common grounds.
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SecondLandingPage;
