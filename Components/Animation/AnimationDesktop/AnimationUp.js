import React ,{useState,useEffect} from 'react';
import Image from 'next/image';
function AnimationUp() {
  const [width, setwidth] = useState(300);
  const [height, setheight] = useState(20);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window) {
        setwidth(window.innerWidth);
        setheight(window.innerWidth);
      }
    });
    if (window) {
      setwidth(window.innerWidth);
      setheight(window.innerWidth);
    }
  }, []);
  return (
    <>
      <div className='coinContainerAnimation'>
        <div className='coinsUp'>
          <div className='coin1' data-aos='example1'>
            <img className='coins' src='coin1.png'></img>
          </div>
          <div className='coin2'>
            <img className='coin10' src='coin2.png'></img>
          </div>
          <div className='coin3'>
            <img className='seal' src='coin4.png'></img>
          </div>
          <div className='coin4'>
            <img className='coin175year' src='coin7.png'></img>
          </div>
          {width>1037? <div className='coin5'>
            <img className='coin1paisa' src='coin6.png'></img>
          </div>:<></>}
        </div>
        <div className='coinsDown'>
          <div className='coin6'>
            <img className='coinTiltedDesign' src='coin3.png'></img>
          </div>
          {width>1037? <div className='coin7'>
            <img className='coin175year' src='coin5.png'></img>
          </div>:<></>}
        </div>
      </div>
    </>
  );
}
export default AnimationUp;
