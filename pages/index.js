import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Lottie from 'react-lottie';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/LA.json',
  };

  return (
    <div onClick={() => null}>
      <Navbar />
      <Lottie options={defaultOptions} />
    </div>
  );
}
