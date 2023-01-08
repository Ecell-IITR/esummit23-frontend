import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import Identity from '../../Components/register/Identity';
import CampusAmbassader from '../../Components/register/CampusAmbassader';
import IITRStudent from '../../Components/register/IITRStudent';
import NonIITRStudent from '../../Components/register/nonIITRStudent';
import Professional from '../../Components/register/Professional';
const Registration = () => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [Gender, setGender] = useState('Female');
  const [RenderId, setRenderId] = useState(0);
  const [RefferalCode, setRefferalCode] = useState('');
  const [UserType, setUserType] = useState('');

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
  if (RenderId == 0) {
    if (useMobile().isMobile) {
      return (
        <>
          <div className='mobRegisterContainer'>
            <div
              className='ImageComponent'
              style={{
                height: '80vh',
                width: '100vw',
              }}
            >


              <Image src='/loginMobile.webp' layout='fill' objectFit='cover' />

            </div>

            <div className='RegisterHereMob'>
              <div className='RegisterLeft'>
                <div className='RegisterForm'>
                  <div
                    className='SummitLogo'
                    style={{ height: 'auto', width: '200px' }}
                  >
                    <Image src='/summitLogo.png' height={'77'} width={'294'} />
                  </div>
                  <h1 className='CreateAccount'>Create an account</h1>
                  <h3 className='CreateAccountsubTitle'>
                    Please fill all the required fields.
                  </h3>
                  <div className='FormInputs'>
                    <input
                      className={
                        Fullname == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      placeholder='Full Name'
                      style={{ margin: '10px' }}
                      value={Fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />

                    <input
                      type='email'
                      className={
                        Email == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      placeholder='Email address'
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      style={{ margin: '10px' }}
                    />

                    <input
                      type='text'
                      className={
                        Contact == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      placeholder='Contact Number'
                      style={{ margin: '10px' }}
                      value={Contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <input
                    
                      type='text'
                      className={
                        RefferalCode == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      placeholder='Refferal code'
                      style={{ margin: '10px' }}
                      value={RefferalCode}
                      onChange={(e) => setRefferalCode(e.target.value)}
                    />
                  </div>

                 <div className='gender'>
                    <div className='GenderHdng'style={{ fontSize:'1rem' , fontWeight:'400'}}>
                    <input
                    
                      type='text'
                      className={
                        RefferalCode == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      style={{color:'#828282'}}
                      placeholder='Gender'
                     
                      value='Gender'
                      onChange={(e) => setRefferalCode(e.Gender.value)}                    
                    
                    />
                    
                   </div>
                  </div>
                  
                     
                       
                  <div
                    style={{
                      background: '#12100e',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                       cursor :"pointer",
                       marginLeft: '0px'
                    }}
                  >
                    <button
                      onClick={() => {
                        setRenderId(1);
                      }}
                      type='submit'
                      className='LoginButton'
                      
                    >
                      Next
                    </button>
                  </div>
                  <div
                    style={{
                      background: '#12100e',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      paddingBottom: '20rem',
                      cursor :"pointer",
                    }}
                  >
                    <div className='AlreadyRegistered'>
                      <div>Already Registered?</div>
                      <Link href='/login'>
                        <div
                          style={{
                            textDecorationLine: 'underline',
                            color: '#DCD1AD',
                            cursor: 'pointer',
                          }}
                        >
                          Login now
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='RegisterRight'></div> */}
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
                  <h1 className='registrationTitle'>Create an account</h1>
                  <h3 className='registrationsubTitle'>
                    Please fill all the required fields.
                  </h3>
                  <div className='formInput'>
                    <input
                    className={
                      Fullname == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                      type='text'
                      placeholder='Full Name'
                      value={Fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    <input
                    className={
                      Email == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                      type='email'
                      placeholder='Email Address'
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    className={
                      Contact == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                      type='tel'
                      placeholder='Contact Number'
                      value={Contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <input
                    className={
                      RefferalCode == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                      type='text'
                      placeholder='Refferal code'
                      style={{ margin: '10px' }}
                      value={RefferalCode}
                      onChange={(e) => setRefferalCode(e.target.value)}
                    />
                  </div>

                  <div className='SelectGender'>
                    <div  className='GenderHdng' style={{fontSize:'1rem', fontWeight:'400'}}>Gender</div>
                    <div className='selectOneOption'>
                      <div className='flex1' style={{ fontSize : '1rem',fontWeight:'400'}}>
                        <input
                      
                          type='radio'
                          style={{height: '1rem', width:'1rem'}}
                          name='SelectGender'
                          value='Male'
                          checked={Gender == 'Male'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                      </div>
                      <div className='flex1' style={{  fontSize : '1rem',fontWeight:'400'}}>
                        <input
                          type='radio'
                          style={{height: '1rem', width:'1rem'}}
                          name='SelectGender'
                          value='Female'
                          checked={Gender == 'Female'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                      </div>
                      <div className='flex1' style={{fontSize : '1rem',fontWeight:'400' }}>
                        <input
                          type='radio'
                          style={{height: '1rem', width:'1rem'}}
                          name='SelectGender'
                          value='Other'
                          checked={Gender == 'Other'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Others
                      </div>
                    </div>
                  </div>
                  <div>
                  <button
                   
                    className='nextButton'
                    onClick={() => {
                      setRenderId(1);
                    }}
                  >
                    Next
                  </button>
                  </div>
                  <div classname='registeredEvent'>
                    <span
                      style={{
                       marginLeft :'-4rem',
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
                          textDecorationLine: 'underline',
                            color: '#DCD1AD',
                            cursor: 'pointer',
                            marginLeft: '10px'
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
  } else if (RenderId === 1) {
    return (
      <>
        <Identity setUserType={setUserType} setRenderId={setRenderId} />
      </>
    );
  } else if (RenderId == 2) {
    if (UserType == 'ca')
      return (
        <>
          <CampusAmbassader
            name={Fullname}
            email={Email}
            contact={Contact}
            Gender={Gender}
          />
        </>
      );
    else if (UserType == 'stuIITR')
      return (
        <>
          <IITRStudent
            name={Fullname}
            email={Email}
            contact={Contact}
            Gender={Gender}
            RefferalCode={RefferalCode}
          />
        </>
      );
    else if (UserType == 'stu')
      return (
        <>
          <NonIITRStudent
            name={Fullname}
            email={Email}
            contact={Contact}
            Gender={Gender}
            RefferalCode={RefferalCode}
          />
        </>
      );
    else if (UserType == 'proff')
      return (
        <>
          <Professional
            name={Fullname}
            email={Email}
            contact={Contact}
            Gender={Gender}
            RefferalCode={RefferalCode}
          />
        </>
      );
  }
};
export default Registration;
