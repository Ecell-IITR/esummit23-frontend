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
            style={{
              width: '100vw',
              height: '80vh',
              backgroundImage: 'url(/loginMobile.webp)',
              backgroundSize: '100vw 80vh',
            }}
          >
            {/* <Image width='100%' height='40' src='/loginMobile.webp' /> */}
          </div>
          <div style={{ marginTop: '-70vh' }} className='mobRegisterHere'>
            <div style={{ justifyContent: 'center' }} className='summitLogo'>
              <div
                style={{
                  width: '200px',
                  height: '100px',
                  marginBottom: '20px',
                  position: 'relative',
                }}
              >
                <Image width='294' height='77' src='/summitLogo.png' />
              </div>
            </div>
            <div style={{ marginTop: '50vw' }} className='mobRegisterForm'>
              <h1 className='mobRegisterTitle'>Select your Identity</h1>
              <h3 className='mobRegisterSubTitle'>
                Please select the appropriate option.
              </h3>
              <div
                style={{
                  width: '100vw',
                  background: '#12100E',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingBottom: '5rem',
                  paddingTop: '1rem',
                }}
              >
                <div
                  className='regButton'
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setUserType('stuIITR');
                    setRenderId(2);
                  }}
                >
                  As an IITR Student
                </div>
                <div
                  className='regButton'
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setUserType('stu');
                    setRenderId(2);
                  }}
                >
                  As a Non-IITR Student
                </div>
                <div
                  className='regButton'
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setUserType('ca');
                    setRenderId(2);
                  }}
                >
                  As a Campus Ambassador
                </div>
                <div
                  className='regButton'
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setUserType('proff');
                    setRenderId(2);
                  }}
                >
                  As a Professional
                </div>
              </div>{' '}
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
            <Image src='/login.webp' layout='fill' />
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    paddingBottom: '5rem',
                    paddingTop: '1rem',
                  }}
                  className='identityButton'
                >
                  <div
                    className='regButton'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setUserType('stuIITR');
                      setRenderId(2);
                    }}
                  >
                    AS AN IITR STUDENT
                  </div>

                  <div
                    className='regButton'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }}
                  >
                    AS A NON-IITR STUDENT
                  </div>

                  <div
                    className='regButton'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setUserType('ca');
                      setRenderId(2);
                    }}
                  >
                    AS A CAMPUS AMBASSADOR
                  </div>

                  <div
                    className='regButton'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setUserType('proff');
                      setRenderId(2);
                    }}
                  >
                    AS A PROFESSIONAL
                  </div>
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
