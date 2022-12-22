import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
function Register({img,name,desc,isRegistered=0}) {
  return (
    <>
      <div className='containerRegister'>
        <div className='photoRegister'><img className='photoRegister' style={{height:"100%"}} src={img} /></div>

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
