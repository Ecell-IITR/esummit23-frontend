import React from 'react';
import Image from 'next/image';

function Animation() {
  return (
    <div>
      <div className='containerAnimationDown'>
        <div className='upAnimationDown'><img style={{width:"100vw"}}  src="Landing.png"/></div>
        <div className='middleAnimationDown'>
        </div>
      </div>
    </div>
  );
}

export default Animation;
