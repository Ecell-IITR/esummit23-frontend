import React, { useEffect, useRef, useState } from 'react';

import 'aos/dist/aos.css';
export default function Home() {
  const CoinRef1 = useRef();
  const CoinRef2 = useRef();
  const CoinRef3 = useRef();
  const CoinRef4 = useRef();
  const CoinRef5 = useRef();
  const ImRef5 = useRef();
  const [first, setfirst] = useState(700);
  const [second, setsecond] = useState(-10);
  const divStyle = {
    position: 'absolute',
  };

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      requestAnimationFrame(() => {
        const rotation = window.scrollY;
        if ( (rotation - 60) < 10) {
          ImRef5.current.style.transform = ` translateY(${
            -1 * (rotation - 100)
          }vh) `;
          setfirst(-1 * (rotation - 100));
          // CoinRef1.current.style.transform = ` translateY(${rotation }vh) `;
          console.log(-1 * (rotation - 100));
        }
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {});
  }, []);
  return (
    <>
      <div style={{ height: '190vh', overflow: 'hidden' }}>
        <h1 style={divStyle} ref={ImRef5} className='landingHeader'>
          E-summit'23{-1*(first-60)}
        </h1>
        <div>
          {/* <img
            ref={CoinRef1}
            style={divStyle}
            className='landingCoin1'
            src='coin1.png'
          /> */}
        </div>
      </div>
      {/* <div style={{height:"100vh"}}>
      
      </div>
      <div style={{height:"100vh"}}>
      
      </div> */}
    </>
  );
}
