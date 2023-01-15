import Navbar from '../Components/Navbar';
import React from 'react';
 import Lottie from 'react-lottie';
 import Animation from '../Components/Animation';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/coming.json',
  };

  return (
    <>
      <Navbar />
      <Animation/>
      <div className='LottieContainer'>
        <Lottie options={defaultOptions} />
      </div>
    </>
  );
}
