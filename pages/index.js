import Navbar from '../Components/Navbar';
import React from 'react';
import Lottie from 'react-lottie';
import SpeakerCard from "../Components/SpeakerCard/SpeakerCard"

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
        <Lottie options={defaultOptions} />
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <SpeakerCard/>
      {/* <SpeakerCard/>
      <SpeakerCard/> */}
      </div>
    </>
  );
}
