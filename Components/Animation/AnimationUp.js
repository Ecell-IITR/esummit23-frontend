import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import "aos/dist/aos.css";
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
    <div className='coin1' data-aos="example1">ff</div>
    <div className='coin2'>ff</div>
    <div className='coin3'>ff</div>
    <div className='coin4'>ff</div>
    <div className='coin5'>ffr</div>
    </div>
    <div className='coinsDown'>
    <div className='coin6'>s</div>
    <div className='coin7'>s</div>

    </div>
  
  


    </div>





    </>


  )

}
export default AnimationUp
