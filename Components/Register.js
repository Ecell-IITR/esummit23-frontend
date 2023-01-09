import { useState } from 'react';
import React from 'react';

function Register({ IsRegistered, img, name, desc }) {
  return (
    <>
      <div className='containerRegister'>
        <div className='photoRegister'>
          <img className='photoRegisterImg' src={img} />
        </div>

        <div
          style={
            IsRegistered == 1
              ? { backgroundColor: '#BA6D39', color: 'white' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='eventRegister'
        >
          {name}
        </div>

        <div
          style={
            IsRegistered == 1
              ? { backgroundColor: '#BA6D39', color: 'white' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='descriptionRegister'
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
      </div>
    </>
  );
}

export default Register;
