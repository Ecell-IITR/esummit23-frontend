import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import LINK from 'next/link';

const Register = () => {
  const setMobile = useUpdateMobile();
  const [Email, setEmail] = useState(' ');
  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
  return (
    <>
      <div className='mobRegisterContainer'>
        <div className="ImageComponent" style={{
        height: '100vh', width: '100vw'
      }}>
        <Image
        src='/loginMob.webp'
        layout='fill'
        />
      </div>

        <div className='RegisterHereMob'>
          <div className='RegisterLeft'>
            <div className='RegisterForm'>
              <div
                className='SummitLogo'
                style={{ height: '267px', width: '200px' }}
              >
                <Image src='/summitLogo.png' height={'77'} width={'294'} />
              </div>
              <h1 className='CreateAccount'>Create an account</h1>
              <h3 className='CreateAccountsubTitle'>
                Please fill all the required fields.
              </h3>
              <div className='FormInputs'>
                <input
                  type='text'
                  placeholder='Full Name'
                  style={{ margin: '10px' }}
                />

                <input
                  type='email'
                  placeholder='Email address'
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  style={{ margin: '10px' }}
                />

                <input
                  type='tel'
                  placeholder='Contact Number'
                  style={{ margin: '10px' }}
                />
              </div>

              <div>
                <div className='SelectGender'>Gender</div>
                <div className='RegisterGender'>
                  <input type='radio' name='SelectGender' id='' />
                  Male
                  <input type='radio' name='SelectGender' id='' />
                  Female
                  <input type='radio' name='SelectGender' id='' />
                  Others
                </div>
              </div>
              <div>
                <LINK href='/Register1/SelectIdentity'>
                  <button type='submit' className='RegisterButton'>
                    Login
                  </button>
                </LINK>
              </div>
              <div className='AlreadyRegistered'>
                <div>Already Registered?</div>
                <LINK href='/Register1/SelectIdentity'>
                  <div>Login now</div>
                </LINK>
              </div>
            </div>
          </div>
          {/* <div className='RegisterRight'></div> */}
        </div>
      </div>
    </>
  )
                }else{
                  return (
                    <>
                      <div className='RegisterContainer'>
                        <div className="ImageComponent" style={{
                        height: '100vh', width: '100vw'
                      }}>
                        <Image
                        src='/login.png'
                        layout='fill'
                        />
                      </div>
                
                        <div className='RegisterHere'>
                          <div className='RegisterLeft'>
                            <div className='RegisterForm'>
                              <div
                                className='SummitLogo'
                                style={{ height: '100px', width: '200px' }}
                              >
                                <Image src='/summitLogo.png' height={'77'} width={'294'} />
                              </div>
                              <h1 className='CreateAccount'>Create an account</h1>
                              <h3 className='CreateAccountsubTitle'>
                                Please fill all the required fields.
                              </h3>
                              <div className='FormInputs'>
                                <input
                                  type='text'
                                  placeholder='Full Name'
                                  style={{ margin: '10px' }}
                                />
                
                                <input
                                  type='email'
                                  placeholder='Email address'
                                  value={Email}
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  style={{ margin: '10px' }}
                                />
                
                                <input
                                  type='tel'
                                  placeholder='Contact Number'
                                  style={{ margin: '10px' }}
                                />
                              </div>
                
                              <div>
                                <div className='SelectGender'>Gender</div>
                                <div className='RegisterGender'>
                                  <input type='radio' name='SelectGender' id='' />
                                  Male
                                  <input type='radio' name='SelectGender' id='' />
                                  Female
                                  <input type='radio' name='SelectGender' id='' />
                                  Others
                                </div>
                              </div>
                              <div>
                                <LINK href='/Register1/SelectIdentity'>
                                  <button type='submit' className='RegisterButton'>
                                    Login
                                  </button>
                                </LINK>
                              </div>
                              <div className='AlreadyRegistered'>
                                <div>Already Registered?</div>
                                <LINK href='/Register1/SelectIdentity'>
                                  <div>Login now</div>
                                </LINK>
                              </div>
                            </div>
                          </div>
                          {/* <div className='RegisterRight'></div> */}
                        </div>
                      </div>
                    </>
                  )
  }
};

export default Register;
