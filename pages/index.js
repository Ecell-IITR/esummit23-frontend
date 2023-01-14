import Navbar from '../Components/Navbar';
import React from 'react';
import Lottie from 'react-lottie';
import Leaderboard from '../Components/Leaderboard';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/coming.json',
  };

  return (
    <>
      <Navbar />
      <div className='LottieContainer'>
        <Leaderboard />
      </div>
    </>
  );
}
