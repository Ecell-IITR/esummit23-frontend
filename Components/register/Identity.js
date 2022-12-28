import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

const Identity = ({ setUserType, setRenderId }) => {
  const setMobile = useUpdateMobile();

  useEffect(() => {
    setMobile();
  }, []);
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

          <div className='RegisterHere'>
            <div className='RegisterLeft'>
              <div className='RegisterForm'>
                <div
                  className='eSummitLogo'
                  style={{ height: '202px', width: '200px' }}
                >
                  <Image src='/summitLogo.png' height={'77'} width={'294'} />
                </div>

                <h1 className='mobCreateAccount'> Select your Identity</h1>
                <h3 className='CreateAccountsubTitle'>
                  Please select appropriate option.
                </h3>
                <div className='mobRegisterIdentity'>
                  <button
                    onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    As an IITR student
                  </button>
                  <button
                    onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    {' '}
                    As a Non-IITR student
                  </button>
                  <button
                    onClick={() => {
                      setUserType('ca');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    As a Campus Ambassador
                  </button>
                  <button
                    onClick={() => {
                      setUserType('proff');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    As a Professional
                  </button>
                </div>
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
                <h1 className='registrationTitle'>Select Your Identity</h1>
                <h3 className='registrationsubTitle'>
                  Please select the appropriate option
                </h3>
                <div className='identityButton'>
                  <button
                    onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    As an IITR student
                  </button>
                  <button
                    onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    {' '}
                    As a Non-IITR student
                  </button>
                  <button
                    onClick={() => {
                      setUserType('ca');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    As a Campus Ambassador
                  </button>
                  <button
                    onClick={() => {
                      setUserType('proff');
                      setRenderId(2);
                    }}
                    className='mRIbutton'
                  >
                    As a Professional
                  </button>
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
export default Identity;
