import React, { useEffect } from 'react';
import Image from 'next/image';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import AnimationUp from '../Animation/AnimationDesktop/AnimationUp';
import Animation from '../Animation/AnimationDesktop/AnimationDown'

const SecondLandingPage = () => {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    
    setMobile();
   }, );
   console.log(useMobile().isMobile)
   if (useMobile().isMobile) {
  return (
    <div className='containerAnimationMobile'>

    <div className='coin1MobileAnimation'>
      <div className='coin1MobileAnimationLeft'><img  className='imageCoinMobileAnimation' src="coin1.png"></img></div>
      <div className='coin1MobileAnimationRight'></div>
    </div>
    <div className='coin2MobileAnimation'>
      <div className='coin2MobileAnimationLeft'></div>
      <div className='coin2MobileAnimationRight'><img  className='imageCoinMobileAnimation' src="coin6.png"></img></div>
    </div>
    <div className='eSummitHeading'><Image src="/headingMobileAnimation.webp" width={300} height={80}></Image></div>
    <div className='collectionOfCoins'>
      <div className='collectionOfCoinsLeft'>
        <div className='collectionOfCoinsLeftUp'><img  className='imageCoinMobileAnimation' src="coin2.png"></img></div>
        <div className='collectionOfCoinsLeftDown'></div>
      </div>
      <div className='collectionOfCoinsMiddle'><img  className='imageCoinMobileAnimation' src="coin4Mobile.png"></img></div>
      <div className='collectionOfCoinsRight'>
        <div className='collectionOfCoinsRightUp'></div>
        <div className='helpcollectionOfCoinsRightDown'>
        <div className='collectionOfCoinsRightDown'><img  className='imageCoinMobileAnimation' src="coin5.png"></img>
        </div>
      </div>
      </div>
    </div>
    <div className='emptySpaceForHelp'></div>
    <div className='coin5MobileAnimation'>
    <div className='coin5MobileAnimationLeft'><img className='imageCoinMobileAnimation' src="coin3.png"></img></div>
    <div className='coin5MobileAnimationRight'></div>
    </div>
    <div className='coin6MobileAnimation'>
    <div className='coin6MobileAnimationLeft'></div>
    <div className='coin6MobileAnimationRight'><img className='imageCoinMobileAnimation' src="coin7.png"></img></div>
    </div>
    
    
    
    </div>
    
  );
}
else
{
  return (
    <div className='parentAnimation' style={{backgroundColor:"linear-gradient(180deg, #12100E 11%, rgba(46, 40, 34, 0.75) 120.26%)"}}>
    <AnimationUp/>
    <Animation/>
    <div className='helpPage'>
    
    </div>
    
    </div>


  )

}
}

export default SecondLandingPage;