import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import React from 'react';
import Lottie from 'react-lottie';
import SecondLandingPage from "../Components/SecondLandingPage"
import ThirdLandingPage from "../Components/ThirdLandingPage"

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/coming.json',
  };

  return (
    <>
      <Navbar />
      {/* <div className='LottieContainer'>
        <Lottie options={defaultOptions} />
      </div> */}
      <SecondLandingPage/>
      <ThirdLandingPage/>
    </>
  );
}
