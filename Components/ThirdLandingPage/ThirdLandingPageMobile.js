import React, { useEffect,useState } from 'react';

const ThirdLandingPage = () => { 
  const [width, setwidth] = useState(300)
  const [height, setheight] = useState(20)
  useEffect(()=> {
    window.addEventListener('resize', ()=> {
      if(window.innerWidth<420){
        setwidth(window.innerWidth-50)
        setheight(window.innerWidth-50)
      }else{
      setwidth(window.innerWidth-100)
      setheight(window.innerWidth-250)}

    })
    if (window) {
      if(window.innerWidth<420){
        setwidth(window.innerWidth-50)
        setheight(window.innerWidth-50)
      }else{
      setwidth(window.innerWidth-100)
      setheight(window.innerWidth-250)}
    }
 }, [])
    return (
      <>
        <div className='ThirdLandingAnimationPageMobile'>
            <div >
          <div style={{width:"90vw"}} ><iframe width={width} height={height} src="https://www.youtube.com/embed/3TJs2KjpxXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          </div>
          <div className='ThirdLandingAnimationPageMobileBox'>
            <div className='ThirdLandingAnimationPageMobileHeading'>REMINSCING THE ETHOS:<span style={{color:" #FFD685"}}>BHARAT</span></div>
            
            <div className='ThirdLandingAnimationPageMobileDescription'>
              E-Summit being the flagship event of ECell, is held annually
              brings together the academic community, venture capitalists, new
              age entrepreneurs and all those passionate about entrepreneurship
              to common grounds.
            </div>
          </div>
        </div>
      </>
    );
  }

export default ThirdLandingPage;
