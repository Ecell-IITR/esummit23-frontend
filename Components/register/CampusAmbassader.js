import Image from 'next/image';
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useState, useEffect } from 'react';
import { Authenticate } from '../../utils';
import { useRouter } from 'next/router';
const CampusAmbassader = ({ name, email, contact, Gender }) => {
  const [Institute, setInstitute] = useState('');
  const [Degree, setDegree] = useState('');
  const [State, setState] = useState('');
  const [Year, setYear] = useState('');
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const setMobile = useUpdateMobile();
  const router = useRouter();
  const Submit = () => {
    if (password?.length > 7) {
      if (password === Confirmpassword) {
        FetchApi('POST', REGISTER_API, {
          UserType: 'ca',
          user: {
            full_name: name,
            email: email,
            phone_number: contact,
            collage: Institute,
            branch: Degree,
            year: Year,
            city: City,
            state: State,
            password: password,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              if (res.data.role) {
                localStorage.setItem('userRoleType', res.data.role);
              }
              Authenticate(res.data.n, res.data.at);
              router.push('/dashboard');
            }
          })
          .catch((err) => {alert('Registered UnSuccessfully');});
        
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
    return <div></div>;
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
                <h1 className='registrationTitle'>Personal Details</h1>
                <h3 className='registrationsubTitle'>
                  Please fill all the required fields.
                </h3>
                <div className='formInput'>
                  <input
                    type='text'
                    value={Institute}
                    placeholder='Institute Name'
                    onChange={(e) => setInstitute(e.target.value)}
                  />
                  <input
                    type='text'
                    value={Degree}
                    placeholder='Branch'
                    onChange={(e) => setDegree(e.target.value)}
                  />
                  <input
                    type='text'
                    value={Year}
                    placeholder='Current Year'
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <input
                    type='text'
                    value={State}
                    placeholder='State'
                    onChange={(e) => setState(e.target.value)}
                  />
                  <input
                    type='text'
                    value={City}
                    placeholder='City'
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    type='password'
                    value={password}
                    placeholder='Set Password'
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <input
                    type='password'
                    value={Confirmpassword}
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
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

export default CampusAmbassader;
