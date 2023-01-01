import { useState } from 'react';
import React from 'react';

function Register({IsRegistered,img,name,desc}) {
  return (
    <>
      <div className='containerRegister'>
        <div className='photoRegister'><img src={img} /></div>

        <div
          style={
            IsRegistered == 1
              ? { backgroundColor: '#BA6D39' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='eventRegister'
        >
          {name}
        </div>

        <div
          style={
            IsRegistered == 1
              ? { backgroundColor: '#BA6D39' }
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
