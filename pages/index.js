import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import AOS from 'aos';
// import "aos/dist/aos.css";
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
   
<div className='parentAnimation' style={{backgroundColor:"linear-gradient(180deg, #12100E 11%, rgba(46, 40, 34, 0.75) 120.26%)"}}>
<AnimationUp/>
<Animation/>
<div className='helpPage'>

</div>

</div>


    {/*
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
    */}


    </>

  );
}
