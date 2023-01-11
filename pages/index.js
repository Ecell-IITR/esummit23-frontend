
import Navbar from '../Components/Navbar';
import React from 'react';
import Lottie from 'react-lottie';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/LA.json',
  };

  return (
    < >
      <Navbar />
      <div style={{marginTop:"4rem"}}>
      <Lottie options={defaultOptions} />
      </div>
    </>
  );
}
