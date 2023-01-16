import { useState } from 'react';
import React from 'react';

import Modal from 'react-bootstrap/Modal';

function Register(props) {
  return (
    <>
      <div className='containerRegister'>
        <div className='photoRegister'>
          <img className='photoRegisterImg' src={props?.img} />
        </div>

        <div
          style={
            props.IsRegistered == 1
              ? { backgroundColor: '#BA6D39', color: 'white' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='eventRegister'
        >
          {props.name}
        </div>

        <div
          style={
            props.IsRegistered == 1
              ? { backgroundColor: '#BA6D39', color: 'white' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='descriptionRegister'
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></div>
      </div>
    </>
  );
}

export default Register;
