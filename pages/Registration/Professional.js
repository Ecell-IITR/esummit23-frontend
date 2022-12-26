import Image from 'next/image';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useState, useEffect } from 'react';

const Professional = () => {
  const [Organisation, setOrganisation] = useState('');
  const [Indusrty, setIndusrty] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const setMobile = useUpdateMobile();

  const Submit = () => {
    if (password.length > 7) {
      if (password === Confirmpassword) {
        FetchApi('POST', REGISTER_API, {
          Organisation: Organisation,
          Indusrty: Indusrty,
          year: Year,
          city: City,
          state: State,
          password: password,
        });
      } else {
        alert('password doesnot match');
      }
    } else {
      alert('password should have 8 or more characters');
    }
  };
  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
    return (
    <>

    </>
    )
  } else {
    return (
      <>
        <div className='RegisterationContainer'>
          <div
            className='ImageComponent'
            style={{
              height: '100vh',
              width: '100vw',
            }}
          >
            <Image src='/login.png' layout='fill' />
          </div>

          <div className='RegisterHere'>
            <div className='RegisterLeft'>
              <div className='RegisterLogo'>
                <div
                  className='SummitLogo'
                  style={{ height: '100px', width: '200px' }}
                >
                  <Image src='/summitLogo.png' height={'77'} width={'294'} />
                </div>
                <h1 className='registrationTitle'>Personal Details</h1>
                <h3 className='registrationsubTitle'>
                  Please fill all the required fields.
                </h3>
                <div className='formInput'>
                  <input
                    type='text'
                    value={Organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder='Organisation Name'
                  />
                  <input
                    type='text'
                    value={Indusrty}
                    onChange={(e) => setIndusrty(e.target.value)}
                    placeholder='Industry (You work in) '
                  />
                  <input
                    type='text'
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                    placeholder='State'
                  />
                  <input
                    type='text'
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='City'
                  />
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder='Set Password'
                  />
                  <input
                    type='password'
                    value={Confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    placeholder='Confirm Password'
                  />
                </div>
                <button
                  type='submit'
                  className='createAccount'
                  onClick={Submit}
                >
                  Create Account
                </button>
              </div>
            </div>
            <div className='RegisterRight'></div>
          </div>
        </div>
      </>
    );
  }
};
export default Professional;
