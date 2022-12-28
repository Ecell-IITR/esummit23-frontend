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
              <h1 className='mobRegisterTitle'>Select your Idetity</h1>
              <h3 className='mobRegisterSubTitle'>
                Please select the appropriate option.
              </h3>

              <button
                style={{
                  marginTop: '60px',
                }}
                onClick={() => {
                  setUserType('stuIITR');
                  setRenderId(2);
                }}
              >
                As an IITR Student
              </button>
              <button onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }} >As a Non-IITR Student</button>
              <button onClick={() => {
                      setUserType('ca');
                      setRenderId(2);
                    }}>As a Campus Ambassador</button>
              <button onClick={() => {
                      setUserType('proff');
                      setRenderId(2);
                    }}>As a Professional</button>
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
                  
                    <button onClick={() => {
                      setUserType('stuIITR');
                      setRenderId(2);
                    }}>As an IITR Student</button>
                
                    <button onClick={() => {
                      setUserType('stu');
                      setRenderId(2);
                    }}>As a Non-IITR Student</button>
                 
                    <button onClick={() => {
                      setUserType('ca');
                      setRenderId(2);
                    }}>As a Campus Ambassador</button>
               
                    <button onClick={() => {
                      setUserType('proff');
                      setRenderId(2);
                    }}>As a Professional</button>
                
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
