import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import Identity from '../../Components/register/Identity';
import CampusAmbassader from '../../Components/register/CampusAmbassader';
import IITRStudent from '../../Components/register/IITRStudent'; 
import NonIITRStudent from '../../Components/register/nonIITRStudent'
import Professional from '../../Components/register/Professional';
const Registration = () => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [Gender, setGender] = useState('Female');
  const [Branch, setBranch] = useState('');
  const [Year, setYear] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [Institute, setInstitute] = useState('');
  const [Degree, setDegree] = useState('');
  const [Organisation, setOrganisation] = useState('');
  const [Indusrty, setIndusrty] = useState('');
  const [RenderId, setRenderId] = useState(0);
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
                height: '100vh',
                width: '100vw',
              }}
            >
              <Image src='/LoginMobile.png' layout='fill' />
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
                      value={Fullname}
                      onChange={(e) => setFullname(e.target.value)}
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
                      value={Contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className='SelectGender'>Gender</div>
                    <div className='RegisterGender'>
                      <input
                        type='radio'
                        name='SelectGender'
                        value='Male'
                        checked={Gender == 'Male'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Male
                      <input
                        type='radio'
                        name='SelectGender'
                        value='Female'
                        checked={Gender == 'Female'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Female
                      <input
                        type='radio'
                        name='SelectGender'
                        value='Other'
                        checked={Gender == 'Other'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Others
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setRenderId(1);
                      }}
                      type='submit'
                      className='RegisterButton'
                    >
                      Login
                    </button>
                  </div>
                  <div className='AlreadyRegistered'>
                    <div>Already Registered?</div>
                    <Link href='Identity'>
                      <div>Login now</div>
                    </Link>
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
                          name='SelectGender'
                          value='Male'
                          checked={Gender == 'Male'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                      </div>
                      <div style={{ margin: '10px' }}>
                        <input
                          type='radio'
                          name='SelectGender'
                          value='Female'
                          checked={Gender == 'Female'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                      </div>
                      <div style={{ margin: '10px' }}>
                        <input
                          type='radio'
                          name='SelectGender'
                          value='Other'
                          checked={Gender == 'Other'}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        Others
                      </div>
                    </div>
                  </div>

                  <button
                    className='nextButton'
                    onClick={() => {
                      setRenderId(1);
                    }}
                  >
                    Next
                  </button>

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
        />
      </>
    );
  }
};
export default Registration;
