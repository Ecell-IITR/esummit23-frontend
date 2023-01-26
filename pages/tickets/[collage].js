import React, { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import Image from 'next/image';
import { OTP_SIGNUP_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Verify from '../../Components/VerifyOtp';
import { toast } from 'react-toastify';

function Login() {
  const setMobile = useUpdateMobile();
  const [email, setemail] = useState('');
  const [Name, setName] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Gender, setGender] = useState({ value: '2', label: 'Female' });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const router = useRouter();
  const data = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' },
    { value: '3', label: 'Others' },
  ];
  const handleChange = (e) => {
    setGender(e);
  };
  function validatePhoneNumber(str) {
    let re = /^\d+$/.test(str);
    return re;
  }
  function submit() {
    if (Name.length < 1) {
      toast.warning('Please enter your name');
      return;
    }
    if (PhoneNo.length != 10 && !validatePhoneNumber(PhoneNo)) {
      toast.warning('Please enter your phone number');
      return;
    }
    if (email === '') {
      toast.warning('Please enter Email');
      return;
    }

    FetchApi(
      'POST',
      OTP_SIGNUP_API,
      {
        user: {
          full_name: Name,
          email: email,
          phone: PhoneNo,
          gender: Gender.value,
          collage: router.query.collage,
        },
      },
      null
    )
      .then((res) => {
        setShow(true);
      })

      .catch((res) => {
        alert('Credentials are wrong');
      });
  }

  useEffect(() => {
    setMobile();
  }, []);

  if (useMobile().isMobile) {
    return (
      <div className='LoginContainer'>
        <Verify email={email} show={show} handleClose={handleChange} />
        <div
          style={{
            width: '100vw',
            height: '60vh',
            backgroundImage: 'url(/loginMobile.webp)',
            backgroundSize: '100vw 60vh',
          }}
        >
          {/* <Image width='100%' height='40' src='/loginMobile.webp' /> */}
        </div>
        <div className='LoginForm'>
          <div className='LoginFormLeft'>
            <div style={{ width: '200px', height: '100px' }}>
              <Image width='294' height='77' src='/summitLogo.png' />
            </div>
            <h1 className='LoginFormLeftTitle'> Login to Continue </h1>
            <div className='LoginFormBlack'>
              <h3 className='LoginFormLeftSubTitle'>
                Please enter your details.
              </h3>
              <input
                className={
                  Name == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type='text'
                value={Name}
                placeholder='Name'
              />

              <input
                type='email'
                className={
                  email == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                placeholder='Email address'
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                style={{ margin: '10px' }}
              />

              <input
                type='text'
                className={
                  PhoneNo == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                placeholder='Contact Number'
                style={{ margin: '10px' }}
                value={PhoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <input
                type='text'
                className={'LoginFormLeftInput inputGold'}
                placeholder={router.query.collage}
                style={{ margin: '10px' }}
                value={router.query.collage}
                disabled='disabled'
              />

              <div className='gender'>
                <div
                  className='GenderHdng'
                  style={{ fontSize: '1rem', fontWeight: '400' }}
                >
                  <Select
                    className='GenderStyling'
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused
                          ? ' #12100e'
                          : ' #12100e',
                        width: '19rem',
                        borderTop: '0px',
                        borderLeft: '0px',
                        borderRight: '0px',
                        borderColor: state.isSelected ? '#12100e' : '#828282',
                        color: '#828282 !important',
                      }),
                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused
                          ? ' #12100e'
                          : ' #12100e',
                        width: '19rem',
                        backgroundColor: '  #dcd1ad',
                        paddingLeft: '2rem',
                        color: 'black',
                      }),
                      input: (baseStyles, state) => ({
                        ...baseStyles,
                        color: ' #dcd1ad',
                      }),
                      singleValue: (baseStyles, state) => ({
                        ...baseStyles,
                        color: '#dcd1ad',
                      }),
                      menu: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused
                          ? ' #12100e'
                          : ' #12100e',
                        width: '20rem',
                        fontFamily: 'Nunito Sans',
                        fontWeight: '400',
                      }),
                    }}
                    placeholder='Gender'
                    value={Gender}
                    options={data}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div
                className='LoginButton'
                onClick={() => {
                  submit();
                }}
              >
                Login
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#12100e', height: '20rem' }}></div>
      </div>
    );
  } else {
    return (
      <>
        <Verify email={email} show={show} handleClose={handleChange} />
        <div className='LoginContainer'>
          <div style={{ width: '100vw', height: '100vh' }}>
            <Image layout='fill' src='/login.webp' />
          </div>
          <div className='LoginForm'>
            <div className='LoginFormLeft'>
              <div style={{ width: '200px', height: '100px' }}>
                <Image width='294' height='77' src='/summitLogo.png' />
              </div>
              <h1 className='LoginFormLeftTitle'> Login to Continue </h1>
              <h3 className='LoginFormLeftSubTitle'>
                Please enter your details.
              </h3>
              <input
                className={
                  Name == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type='text'
                value={Name}
                placeholder='Name'
              />

              <input
                type='email'
                className={
                  email == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                placeholder='Email address'
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                style={{ margin: '10px' }}
              />

              <input
                type='text'
                className={
                  PhoneNo == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                placeholder='Contact Number'
                style={{ margin: '10px' }}
                value={PhoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <input
                type='text'
                className={'LoginFormLeftInput inputGold'}
                placeholder={router.query.collage}
                style={{ margin: '10px' }}
                value={router.query.collage}
                disabled='disabled'
              />

              <div className='gender'>
                <div
                  className='GenderHdng'
                  style={{ fontSize: '1rem', fontWeight: '400' }}
                >
                  <Select
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: ' #12100e',
                        width: '32vw',
                        marginTop: '0.5rem',
                        marginLeft: '0.5rem',
                        borderTop: '0px',
                        borderLeft: '0px',
                        borderRight: '0px',
                        color: ' #828282',
                      }),
                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused
                          ? ' #12100e'
                          : ' #12100e',
                        backgroundColor: '  #dcd1ad',
                        width: '30rem',
                        color: 'black',
                      }),
                      singleValue: (baseStyles, state) => ({
                        ...baseStyles,
                        color: ' #dcd1ad',
                      }),
                      menu: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused
                          ? ' #12100e'
                          : ' #12100e',
                        width: '30rem',
                        fontFamily: 'Nunito Sans',
                        fontWeight: '400',
                      }),
                    }}
                    placeholder='Gender'
                    value={Gender}
                    options={data}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* <div className='loginOrContainer'>
                <div className='loginOrLine'></div>
                <div className='loginOrText'>OR</div>
                <div className='loginOrLine'></div>
              </div> */}

              <div
                style={{}}
                className='LoginButton'
                onClick={() => {
                  submit();
                }}
              >
                Login
              </div>
            </div>
            <div className='LoginFormRight'></div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
