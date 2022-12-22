import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
function Register({img,name,desc,isRegistered=0}) {
  return (
    <>
      <div className='containerRegister'>
        <div className='photoRegister'><Image src={img} width="200%" height="100%" /></div>

        <div
          style={
            isRegistered == 1
              ? { backgroundColor: '#BA6D39',color:'white' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='eventRegister'
        >
          {name}
        </div>

        <div
          style={
            isRegistered == 1
              ? { backgroundColor: '#BA6D39',color:'white' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='descriptionRegister'
        >{desc}
        </div>
      </div>
    </>
  );
}

export default Register;
