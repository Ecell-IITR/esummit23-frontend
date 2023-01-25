import Image from 'next/image';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useState, useEffect } from 'react';
import { Authenticate } from '../../utils';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { toast } from 'react-toastify';
const CampusAmbassader = ({ name, email, contact, Gender }) => {
  const [Institute, setInstitute] = useState('');
  const [Branch, setBranch] = useState('');
  const [State, setState] = useState('');
  const [RenderId, setRenderId] = useState(0);
  const [Year, setYear] = useState('');
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowPassword2, setShowPassword2] = useState(false);
  const [Degree, setDegree] = useState('');
  const setMobile = useUpdateMobile();
  const router = useRouter();

  const Submit = () => {
    if (Institute === '') {
      toast.warning('Please enter Institute Name');
    } else if (Year === '') {
      toast.warning('Please enter Year');
    } else if (State === '') {
      toast.warning('Please enter State');
    } else if (City === '') {
      toast.warning('Please enter City');
    } else if (password === '') {
      toast.warning('Please enter Password');
    } else {
      if (password?.length > 7) {
        if (password === Confirmpassword) {
          FetchApi('POST', REGISTER_API, {
            UserType: 'ca',
            user: {
              full_name: name,
              gender: Gender.label,
              email: email,
              phone_number: contact,
              collage: Institute,
              branch: Degree,
              year: Year,
              city: City,
              state: State.label,
              password: password,
            },
          })
            .then((res) => {
              if (res.status === 201) {
                if (res.data.role) {
                  localStorage.setItem('userRoleType', res.data.role);
                }
                Authenticate(res.data.n, res.data.e_id, res.data.at);
                router.push('/dashboard');
              }
            })
            .catch((err) => {
              toast(err.response.data.error);
            });
        } else {
          toast('password doesnot match');
        }
      } else {
        toast('password should have 8 or more characters');
      }
    }
  };
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
    {
      value: 30,
      label: 'Delhi',
    },
    {
      value: 31,
      label: 'Ladakh',
    },
    {
      value: 32,
      label: 'Jammu & Kashmir',
    },

    {
      value: 33,
      label: 'Puducherry',
    },
    ,
    {
      value: 34,
      label: 'Lakshadweep',
    },
    {
      value: 35,
      label: 'Lakshadweep',
    },
    {
      value: 36,
      label: 'Chandigarh',
    },
    {
      value: 36,
      label: 'Dadra and Nagar Haveli and Daman & Diu',
    },
    {
      value: 37,
      label: 'Andaman and Nicobar Islands',
    },
  ];

  useEffect(() => {
    setMobile();
  }, []);
  if (RenderId == 0) {
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
                backgroundImage: 'url(/loginMobile.webp)',
                backgroundSize: '100vw 60vh',
              }}
            >
              {/* <Image width='100%' height='40' src='/loginMobile.webp' /> */}
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
                    className={
                      Institute == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    style={{ margintop: '36px' }}
                    type='text'
                    placeholder='Institute Name'
                    value={Institute}
                    onChange={(e) => setInstitute(e.target.value)}
                  />
                  <input
                    className={
                      Branch == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    type='text'
                    placeholder='Branch'
                    value={Branch}
                    onChange={(e) => setBranch(e.target.value)}
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
                        backgroundColor: state.isFocused
                          ? ' #12100e'
                          : ' #12100e',
                        width: '20rem',
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
                        width: '20rem',
                        backgroundColor: '  #dcd1ad',
                        paddingLeft: '1rem',
                        color: '#828282',
                      }),
                      input: (baseStyles, state) => ({
                        ...baseStyles,
                        color: ' #dcd1ad',
                      }),
                      singleValue: (baseStyles, state) => ({
                        ...baseStyles,
                        color: '#dcd1ad',
                      }),
                      valueContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        padding: 0,
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
                      style={{ marginTop: '-20px' }}
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
                      style={{ marginTop: '-20px' }}
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
                  <h1 className='registrationTitle'>Personal Details</h1>
                  <h3 className='registrationsubTitle'>
                    Please fill all the required fields.
                  </h3>
                  <div className='formInput'>
                    <input
                      className={
                        Institute == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      value={Institute}
                      placeholder='Institute Name'
                      onChange={(e) => setInstitute(e.target.value)}
                    />
                    <input
                      className={
                        Degree == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      value={Degree}
                      placeholder='Degree'
                      onChange={(e) => setDegree(e.target.value)}
                    />
                    <input
                      className={
                        Year == ''
                          ? 'LoginFormLeftInput'
                          : 'LoginFormLeftInput inputGold'
                      }
                      type='text'
                      value={Year}
                      placeholder='Current Year'
                      onChange={(e) => setYear(e.target.value)}
                    />
                    {/* <input
                    className={
                      State == ''
                        ? 'LoginFormLeftInput'
                        : 'LoginFormLeftInput inputGold'
                    }
                    type='text'
                    value={State}
                    placeholder='State'
                    onChange={(e) => setState(e.target.value)}
                  /> */}
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
                      value={City}
                      placeholder='City'
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
                        style={{ marginTop: '-20px' }}
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
                        style={{ marginTop: '-20px' }}
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

export default CampusAmbassader;
