import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
export default function Home() {
  const imageRef = useRef();
  const divStyle = {
    backgroundColor: 'black',
   marginLeft:"5vw", width:'40px'
  }
  const divStyle1 ={
    backgroundColor: 'black',
    marginLeft:"56vw", width:'40px'}
  useEffect(() => {
    window.addEventListener('scroll', event => {
      requestAnimationFrame(() => {
        const rotation = window.scrollY /2;
        const tr = window.scrollY*1.5 ;
        imageRef.current.style.transform = ` translateY(${tr}px) rotate(${rotation}deg)`;
      });
    });
  }, []);
  return (
    <><div style={{height:"200vh"}}>
      <div ref={imageRef} style={divStyle}> <Image src='/coin 1_2.png' height='90%' width='100%'></Image></div>
      <div ref={imageRef} style={divStyle1}> <Image src='/coin 1_2.png' height='90%' width='100%'></Image></div>
      </div>
    </>
  )
}































// function App() {
//   useEffect(() => {
//     AOS.init(
//       {duration:2000},
//       {offset: 200},
//       {delay: 0},
//   {duration: 400},
//   {easing: 'ease-in-sine'},
//   {mirror: false},
//   {anchorPlacement: 'top-bottom'}
//     );
//     AOS.refresh();
//   }, []);
//   return (<div className="mainc">
    
//     <div classnames="box" data-aos="slide-down" data-aos-duration='225'>
// <Image src='/coin 1_2.png' height='90%' width='100%'></Image>
// </div>

// </div>
//  );
// };

// export default App;