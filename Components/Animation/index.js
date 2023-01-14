import React, { useEffect } from 'react';
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
<h1>hello</h1>
    
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