import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

const IITRStudent = () => {
  const [Branch, setBranch] = useState('');
  const [Year, setYear] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const setMobile = useUpdateMobile();

  const Submit = () => {
    if (password.length > 7) {
      if (password === Confirmpassword) {
        FetchApi('POST', REGISTER_API, {
          branch: Branch,
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


  useEffect(
    () => {
    setMobile();
     }
     ,[]);

  if (useMobile().isMobile) {
    return (
      <>
        <div className='mobRegisterContainer'>
          <div
            className='ImageComponent'
            style={{
              height: '100vh',
              width: '100vw',
            }}
          >
            <Image src='/LoginMobile.png' layout='fill' />
          </div>

          <div className='mobRegisterHere'>
            <div className='RegisterLeft'>
              <div className='mobRegisterFormMore'>
                <div
                  className='SummitLogo'
                  style={{ height: '74px', width: '200px' }}
                >
                  <Image src='/summitLogo.png' height={'77'} width={'294'} />
                </div>
                <h1 className='CreateAccount'> Personal Details</h1>
                <h3 className='CreateAccountsubTitle'>
                  Please fill all the required fields.
                </h3>
                <div className='mobRequiredDetails'>

                  <input 
                  type='text' 
                  placeholder='Branch Name'
                  value={Branch}
                    onChange={(e) => setBranch(e.target.value)}
                   />

                  <input
                    type='text'
                    placeholder='Current Year'
                    value={Year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <input 
                  type='text'  
                  placeholder='State' 
                  value={State}
                  onChange={(e) => setState(e.target.value)}/>

                  <input 
                  type='text'  
                  placeholder='City' 
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  />

                  <input
                    type='password'
                    placeholder='Set password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}

                  />
                  <input
                    type='password'                   
                    placeholder='Confirm Password'
                    value={Confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}

                  />         
                </div>

                <button 
                type='submit' 
                className='CreateAccountButton'
                onClick={Submit}
                >
                  Create Account
                </button>
              </div>

              <div className='RegisterRight'></div>
            </div>
          </div>
        </div>
      </>
    );
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
                    placeholder='Branch'
                    value={Branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Current Year'
                    value={Year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='State' 
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='City'
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Set Password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    value={Confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
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
export default IITRStudent;