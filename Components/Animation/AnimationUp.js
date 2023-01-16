import React from 'react'
import Image from 'next/image'
// import AOS from 'aos';
// import "aos/dist/aos.css";
function AnimationUp() {

const firstLandingPage=()=>{
useEffect(() => {
  AOS.init({
    duration:220
  });
  AOS.refresh(
    // {
    //   duration:220
    // }
  );
},[]);
}

  return (
    <>
      
  <div className='coinContainerAnimation'>
    <div className='coinsUp'>
    <div className='coin1' data-aos="example1"><img className='coins' src="coin1.png"></img></div>
    <div className='coin2'><img className='coin10' src="coin2.png"></img></div>
    <div className='coin3'><img className='seal' src="coin4.png"></img></div>
    <div className='coin4'><img className='coin175year' src="coin7.png"></img></div>
    <div className='coin5'><img className='coin1paisa' src="coin6.png"></img></div>
    </div>
    <div className='coinsDown'>
    <div className='coin6'><img className='coinTiltedDesign' src="coin3.png"></img></div>
    <div className='coin7'><img className='coin175year' src="coin5.png"></img></div>

    </div>
  
  


    </div>





    </>


  )

}
export default AnimationUp
