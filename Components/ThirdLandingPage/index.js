import ThirdLandingPageAnimation from './ThirdLandingPageAnimation';
import ThirdLandingPageMobile from './ThirdLandingPageMobile';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useEffect } from 'react';

export default function Navbar() {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  }, []);
  return (
    <>
      {useMobile()?.isMobile ? (
        <ThirdLandingPageMobile />
      ) : (
        <ThirdLandingPageAnimation />
      )}
    </>
  );
}