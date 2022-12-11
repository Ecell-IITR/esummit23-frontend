import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
<<<<<<< Updated upstream
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from  '../Components/Footer/Footer'
import Navbar from  '../Components/Navbar/Navbar'
import Ideathon from  '../Components/Ideathon/Ideathon'
export default function Home() {
  return (
    <>
    {/* <Navbar/>
    <Footer/> */}
     <Ideathon/>

    </>







>>>>>>> Stashed changes

export default function Home() {

  return (
    <div className={styles.container}>

    </div>
  );

}
