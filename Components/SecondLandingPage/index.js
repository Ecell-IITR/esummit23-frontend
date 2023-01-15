import SecondLandingPage from './SecondLandingPage';
import SecondLandingPageMobile from './SecondLandingPageMobile';
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
        <SecondLandingPageMobile />
      ) : (
        <SecondLandingPage />
      )}
    </>
  );
}
