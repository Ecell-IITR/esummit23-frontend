import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import React,{useEffect} from 'react';


import Animation from '../Components/Animation/AnimationDown';
import AnimationUp from '../Components/Animation/AnimationUp';
// import Lottie from 'react-lottie';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/LA.json',
  };

  return (
    <>
   

<AnimationUp/>
<Animation/>




    {/*
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
    */}


    </>

  );
}
