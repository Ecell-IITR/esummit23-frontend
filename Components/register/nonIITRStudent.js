import Image from 'next/image';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useState, useEffect } from 'react';
import { Authenticate } from '../../utils';
import { useRouter } from 'next/router';
const NonIITRStudent = ({ name, email, contact, Gender, RefferalCode }) => {
  const [Institute, setInstitute] = useState('');
  const [Degree, setDegree] = useState('');
  const [Year, setYear] = useState('');
  const [State, setState] = useState('');
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
            state: State,
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
            alert('Registered UnSuccessfully');
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
            <div style={{ marginTop: '32vw' }} className='mobRegisterFormMore'>
              <h1 className='mobRegisterTitle'> Personal Details</h1>
              <h3 className='mobRegisterSubTitle'>
                Please fill all the required fields.
              </h3>
              <div className='regInputContainer'>
                <input
                  styl={{ margintop: '36px' }}
                  type='text'
                  placeholder='Institute Name'
                  value={Institute}
                  onChange={(e) => setInstitute(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Degree'
                  value={Degree}
                  onChange={(e) => setDegree(e.target.value)}
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
                    type='text'
                    placeholder='Institute Name'
                    value={Institute}
                    onChange={(e) => setInstitute(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Degree'
                    value={Degree}
                    onChange={(e) => setDegree(e.target.value)}
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
};
export default NonIITRStudent;
