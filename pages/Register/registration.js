import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

const Registration = () => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [Gender, setGender] = useState('');
  const setMobile = useUpdateMobile();

  const handleSubmit = (e) => {
    FetchApi('POST', REGISTER_API, {
      full_name: Fullname,
      email: Email,
      phone_number: Contact,
    });
  };

  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
    return (
      <>
        <div className='mobRegisterContainer'>
          <div
            style={{
              width: '100vw',
              height: '60vh',
              backgroundImage: 'url(/loginMobile.png)',
              backgroundSize: '100vw 60vh',
            }}
          >
            {/* <Image width='100%' height='40' src='/loginMobile.png' /> */}
          </div>
          <div className='mobRegisterHere'>
            <div className='summitLogo'>
              <div
                style={{
                  width: '200px',
                  height: '100px',
                  margin: 'auto',
                  position: 'relative',
                }}
              >
                <Image width='294' height='77' src='/summitLogo.png' />
              </div>
            </div>
            <div className='mobRegisterForm'>
              <h1 className='mobRegisterTitle'>Create an account</h1>
              <h3 className='mobRegisterSubTitle'>
                Please fill all the required fields.
              </h3>
              <input
                type='text'
                placeholder='Full Name'
                style={{ marginTop: '20px' }}
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <input 
              type='email' 
              placeholder='Email Address'
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
               />
              <input 
              type='password' 
              placeholder='Contact Number' 
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
              />

              <div style={{ color: '#E0E0E0', height: '20px', width: '320px' }}>
                Gender
              </div>
              <div className='genderInput'>
                <input 
                type='radio'
                name='mobSelectGender'
                value={Gender}
                onChange={(e) => setGender(e.target.value)}

                  />
                Male
                <input 
                type='radio'
                name='mobSelectGender'
                value={Gender}
                onChange={(e) => setGender(e.target.value)}

                 />
                Female
                <input 
                type='radio' 
                name='mobSelectGender' 
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                />
                Others
              </div>

              <input type='text' placeholder='Referral Code (Optional) ' />
              <button
                style={{
                  width: '320px',
                  height: '44px',
                  borderRadius: '100px',
                  backgroundColor: '#BA6D39',
                  margin: '8px',
                  color: '#FFFFFF',
                  fontFamily: 'Lexend',
                  fontSize: '18px',
                  fontWeight: '600',
                  }} 
                  onClick={handleSubmit}
                  >Next
              </button>
              <div
                style={{
                  width: '200px',
                  height: '14px',
                  color: '#BDBDBD',
                  fontSize: '12px',
                }}
              >
                 
                <span
                  style={{
                    width: '114px',
                    height: '14px',
                  }}
                >
                  Already Registered
                </span>
                
                <Link href='../login'>
                <span
                  style={{
                    width: '63px',
                    height: '14px',
                    marginLeft: '10px',
                    cursor: 'pointer',
                    color: '#DCD1AD',
                  }}
                >
                  Login Now
                </span>
                </Link>
              </div>
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
                <h1 className='registrationTitle'>Create an account</h1>
                <h3 className='registrationsubTitle'>
                  Please fill all the required fields.
                </h3>
                <div className='formInput'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    value={Fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <input
                    type='email'
                    placeholder='Email Address'
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='tel'
                    placeholder='Contact Number'
                    value={Contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className='SelectGender'>
                  <div>Gender</div>
                  <div className='selectOneOption'>
                    <div style={{ margin: '10px' }}>
                      <input
                        type='radio'
                        name='selectGender'
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                      />{' '}
                      Male
                    </div>
                    <div style={{ margin: '10px' }}>
                      <input
                        type='radio'
                        name='selectGender'
                        id=''
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      female
                    </div>
                    <div style={{ margin: '10px' }}>
                      <input
                        type='radio'
                        name='selectGender'
                        id=''
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Others
                    </div>
                  </div>
                </div>
                <Link href='Identity'>
                  <button className='nextButton' onClick={handleSubmit}>
                    Next
                  </button>
                </Link>
                <div>
                  <span
                    style={{
                      marginRight: '10px',
                      color: '#BDBDBD',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  >
                    Already Registered?
                  </span>
                  <Link href='../login'>
                    <span
                      style={{
                        color: '#BDBDBD',
                        fontSize: '14px',
                        fontWeight: '400',
                      }}
                    >
                      Login Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='RegisterRight'></div>
          </div>
        </div>
      </>
    );
  }
};
export default Registration;
