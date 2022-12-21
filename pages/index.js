import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from  '../Components/Footer/Footer'
import Navbar from  '../Components/Navbar/Navbar'
import Ideathon from  '../Components/Ideathon/Ideathon'
import SponsorCard from  '../Components/SponsorCard'
export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Footer/> */}
    {/* <SponsorCard/> */}
     <Ideathon/>

    </>
  )
}