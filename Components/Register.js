import { useState } from 'react';
import React from 'react';

function Register() {
  const [IsRegistered, setIsRegistered] = useState(0);
  return (
    <>
      <div className='containerRegister'>
        <div className='photoRegister'></div>

        <div
          style={
            IsRegistered == 1
              ? { backgroundColor: '#BA6D39' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='eventRegister'
        >
          Ideastorm
        </div>

        <div
          style={
            IsRegistered == 1
              ? { backgroundColor: '#BA6D39' }
              : { backgroundColor: '#F3EDD8' }
          }
          className='descriptionRegister'
        >
          Annual B-Plan competition which witnesses more than 500 entries from
          over the country
        </div>
      </div>
    </>
  );
}

export default Register;
