import Image from 'next/image';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useState, useEffect } from 'react';
import { Authenticate } from '../../utils';
import { useRouter } from 'next/router';
import Select from 'react-select';
const NonIITRStudent = ({ name, email, contact, Gender, RefferalCode }) => {
  const [Institute, setInstitute] = useState('');
  const [Degree, setDegree] = useState('');
  const [Year, setYear] = useState('');
  const [State, setState] = useState('');
  const [RenderId, setRenderId] = useState(0);
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowPassword2, setShowPassword2] = useState(false);
  const setMobile = useUpdateMobile();
  const router = useRouter();
  const Submit = () => {
    if (password?.length > 7) {
      if (password === Confirmpassword) {
        FetchApi('POST', REGISTER_API, {
          UserType: 'stu',
          referred_by: RefferalCode,
          user: {
            full_name: name,
            gender: Gender.label,
            email: email,
            phone_number: contact,
            collage: Degree,
            branch: Branch,
            year: Year,
            city: City,
            state: State.label,
            password: password,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              Authenticate(res.data.n, res.data.e_id, res.data.at);
              router.push('/dashboard');
            }
          })
          .catch((err) => {
            console.log(err);
            alert('Registered UnSuccessfull');
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
  if (RenderId == 0) {
    const StateData = [
      {
        value: 1,
        label: 'Andhra Pradesh',
      },
      {
        value: 2,
        label: 'Arunachal Pradesh',
      },
      {
        value: 3,
        label: 'Assam',
      },
      {
        value: 4,
        label: 'Bihar',
      },
      {
        value: 5,
        label: 'Chhattisgarh',
      },
      {
        value: 6,
        label: 'Goa',
      },
      {
        value: 7,
        label: 'Gujarat',
      },
      {
        value: 8,
        label: 'Haryana',
      },
      {
        value: 9,
        label: 'Himachal Pradesh',
      },
      {
        value: 10,
        label: 'Jharkhand',
      },
      {
        value: 11,
        label: 'Karnataka',
      },
      {
        value: 12,
        label: 'Kerala',
      },
      {
        value: 13,
        label: 'Madhya Pradesh',
      },
      {
        value: 14,
        label: 'Maharashtra',
      },
      {
        value: 15,
        label: 'Manipur',
      },
      {
        value: 16,
        label: 'Meghalaya',
      },
      {
        value: 17,
        label: 'Mizoram',
      },
      {
        value: 18,
        label: 'Nagaland',
      },
      {
        value: 19,
        label: 'Odisha',
      },
      {
        value: 20,
        label: 'Puducherry',
      },
      {
        value: 21,
        label: 'Punjab',
      },
      {
        value: 22,
        label: 'Rajasthan',
      },
      {
        value: 23,
        label: 'Sikkim',
      },
      {
        value: 24,
        label: 'Tamil Nadu',
      },
      {
        value: 25,
        label: 'Telangana',
      },
      {
        value: 26,
        label: 'Tripura',
      },
      {
        value: 27,
        label: 'Uttar Pradesh',
      },
      {
        value: 28,
        label: 'Uttarakhand',
      },
      {
        value: 29,
        label: 'West Bengal',
      },
    ];
    const handleChange = (e) => {
      setState(e);
    };
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
            <div style={{ marginTop: '-50vh' }} className='mobRegisterHere'>
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
              <div
                style={{ marginTop: '32vw' }}
                className='mobRegisterFormMore'
              >
                <h1 className='mobRegisterTitle'> Personal Details</h1>
                <h3 className='mobRegisterSubTitle'>
                  Please fill all the required fields.
                </h3>
                <div className='regInputContainer'>
                  <input
                    styl={{ margintop: '36px' }}
                    className={
                      Institute == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    type='text'
                    placeholder='Institute Name'
                    value={Institute}
                    onChange={(e) => setInstitute(e.target.value)}
                  />
                  <input
                    className={
                      Degree == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    type='text'
                    placeholder='Degree'
                    value={Degree}
                    onChange={(e) => setDegree(e.target.value)}
                  />
                  <input
                    className={
                      Year == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    type='text'
                    placeholder='Current Year'
                    value={Year}
                    onChange={(e) => setYear(e.target.value)}
                  />
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
                        marginBottom: '0.5rem',
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
                    placeholder='State'
                    value={State}
                    options={StateData}
                    onChange={handleChange}
                  />

                  <input
                    className={
                      City == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    type='text'
                    placeholder='City'
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      className={
                        password == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      type={ShowPassword ? 'text' : 'Password'}
                      value={password}
                      placeholder='Password'
                    />
                    <div
                      className='LoginFormLeftShowPassword'
                      style={{ marginTop: '-28px' }}
                      onClick={() => setShowPassword(!ShowPassword)}
                    >
                      <Image
                        width='20'
                        height='20'
                        src={
                          ShowPassword
                            ? '/Hidepassword.webp'
                            : '/Showpassword.webp'
                        }
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      className={
                        password == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      onChange={(e) => {
                        setConfirmpassword(e.target.value);
                      }}
                      type={ShowPassword2 ? 'text' : 'Password'}
                      value={Confirmpassword}
                      placeholder='Confirm Password'
                    />
                    <div
                      className='LoginFormLeftShowPassword'
                      style={{ marginTop: '-28px' }}
                      onClick={() => setShowPassword2(!ShowPassword2)}
                    >
                      <Image
                        width='20'
                        height='20'
                        src={
                          ShowPassword2
                            ? '/Hidepassword.webp'
                            : '/Showpassword.webp'
                        }
                      />
                    </div>
                  </div>

                  <button
                    className='CreateAccountButton'
                    type='submit'
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
                  <div className='formInput1'>
                    <input
                      className={
                        Institute == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      placeholder='Institute Name'
                      value={Institute}
                      onChange={(e) => setInstitute(e.target.value)}
                    />
                    <input
                      className={
                        Degree == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      placeholder='Degree'
                      value={Degree}
                      onChange={(e) => setDegree(e.target.value)}
                    />
                    <input
                      className={
                        Year == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      placeholder='Current Year'
                      value={Year}
                      onChange={(e) => setYear(e.target.value)}
                    />

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
                          marginBottom: '0.5rem',
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
                      placeholder='State'
                      value={State}
                      options={StateData}
                      onChange={handleChange}
                    />
                    <input
                      className={
                        City == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      placeholder='City'
                      value={City}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        className={
                          password == ''
                            ? 'LoginFormLeftInput'
                            : 'LoginFormLeftInput inputGold'
                        }
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        type={ShowPassword ? 'text' : 'Password'}
                        value={password}
                        placeholder='Password'
                      />
                      <div
                        className='LoginFormLeftShowPassword'
                        style={{ marginTop: '-28px' }}
                        onClick={() => setShowPassword(!ShowPassword)}
                      >
                        <Image
                          width='20'
                          height='20'
                          src={
                            ShowPassword
                              ? '/Hidepassword.webp'
                              : '/Showpassword.webp'
                          }
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        className={
                          password == ''
                            ? 'LoginFormLeftInput'
                            : 'LoginFormLeftInput inputGold'
                        }
                        onChange={(e) => {
                          setConfirmpassword(e.target.value);
                        }}
                        type={ShowPassword2 ? 'text' : 'Password'}
                        value={Confirmpassword}
                        placeholder='Confirm Password'
                      />
                      <div
                        className='LoginFormLeftShowPassword'
                        style={{ marginTop: '-28px' }}
                        onClick={() => setShowPassword2(!ShowPassword2)}
                      >
                        <Image
                          width='20'
                          height='20'
                          src={
                            ShowPassword2
                              ? '/Hidepassword.webp'
                              : '/Showpassword.webp'
                          }
                        />
                      </div>
                    </div>
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
  }
};
export default NonIITRStudent;
