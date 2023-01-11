import Navbar from '../Components/Navbar';
import React from 'react';
import Lottie from 'react-lottie';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/coming.json',
  };

  return (
    <>
      <Navbar />

      <Lottie options={defaultOptions} />
    </>
  );
}
