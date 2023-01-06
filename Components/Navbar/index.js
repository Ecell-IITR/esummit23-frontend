import Head from './Navbar';
import HeaderMobile from './HeaderMobile';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useEffect } from 'react';

export default function Navbar() {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  }, []);
  console.log(useMobile());
  return <>{useMobile()?.isMobile ? <HeaderMobile /> : <Head />}</>;
}
