import React, { useEffect } from 'react';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';


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
}

export default SecondLandingPage;