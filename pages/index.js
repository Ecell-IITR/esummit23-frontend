import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import React from 'react';
import Animation from '../Components/Animation';
import Lottie from 'react-lottie';
import SecondLandingPage from '../Components/SecondLandingPage';
import ThirdLandingPage from '../Components/ThirdLandingPage';
import Footer from "../Components/Footer/Footer"


export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/coming.json',
  };

  return (
    <>
      <Animation/>

   
      <div className='Seo-text'>
        <p>
          E-Summit 22 is organised by E-Cell IIT Roorkee which is one of the
          Largest Entrepreneurship Promoting college body in Asia.E-Summit has
          hosted some of the most prominent stalwarts of the industry over the
          years including but not limited to Startup expo, speaker events and
          much more{' '}
        </p>
      </div>

      
      {/* <div style={{width:"100vw",height:"100vh"}}></div> */}
      <div>
        <SecondLandingPage />
      </div>
      <div>
        <ThirdLandingPage />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div style={{width:"100vw",height:"100vh"}}></div> */}

      {/* <div className='Seo-text'><p>To find a way out of the darkness that has engulfed us over the past two years, the Indian youth needs to take on the mantle and show us the path to a new world where optimism, creativity, innovation, and ambition thrive. The new edition of Entrepreneurship Summit is a 3-day event that is being organized with the vision of providing a platform that stimulates discussion on ideas that possess the potential to turn the issues troubling us into an opportunity to revolutionize the world. E-Summit’22 will present rays of hope so dazzling that they penetrate even the darkness that veils our eyes. The summit is being organized from 21 Jan to 23 Jan in online mode.</p></div>
      <div className='Seo-text'><p>E-Summit 2022 organized by ecell IIT Roorkee will bring every one with lithora of opportunity.Esummit 2022 organized between 21 Jan to 23 Jan which promates the idea of startup india also giving opportunity of networkink funding and much more. Hope to see you in E-summit 22 organized by IIT Roorkee </p></div>
      <div className='Seo-text'><p>IIT Bombay will host the 18th edition of the Entrepreneurship Summit on January 28th and 29th. E-Summit'23 aims to provide a platform for discussion on innovative ideas that have the potential to transform current challenges into opportunities for positive change. The goal of the event is to inspire and offer rays of hope to attendees.  </p></div> */}
    </>
  );
}
