import React, { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import Image from 'next/image';

function Login() {
  const setMobile = useUpdateMobile();
  const [email, setemail] = useState();
  const [Password, setPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
    return <div>rrrrrrrrrrrrr</div>;
  } else {
    return (
      <>
        <div className='LoginContainer'>
          <div style={{ width: '100vw', height: '100vh' }}>
            <Image layout='fill' src='/login.png' />
          </div>
          <div className='LoginForm'>
            <div className='LoginFormLeft'>
              <div style={{ width: '200px', height: '100px' }}>
                <Image width='294' height='77' src='/summitLogo.png' />
              </div>
              <h1 className='LoginFormLeftTitle'> Welcome Back </h1>
              <h3 className='LoginFormLeftSubTitle'>
                Please enter your details.
              </h3>
              <input
                className={
                  email == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                onChange={(e) => setemail(e.target.value)}
                type='text'
                value={email}
                placeholder='Esummit id'
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  className={
                    Password == ''
                      ? 'LoginFormLeftInput'
                      : 'LoginFormLeftInput inputGold'
                  }
                  onChange={(e) => setPassword(e.target.value)}
                  type={ShowPassword ? 'text' : 'Password'}
                  value={Password}
                  placeholder='Passsword'
                />
                <div
                  className='LoginFormLeftShowPassword'
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  <Image width='20' height='20' src='/Showpassword.webp' />
                </div>
              </div>
              <div className='loginOrContainer'>
                <div className='loginOrLine'></div>
                <div className='loginOrText'>OR</div>
                <div className='loginOrLine'></div>
              </div>
              <div className='loginRegisterContainer'>
                <div className='loginRegisterText'>New to Esummit?</div>
                <div className='loginRegisterText loginRegisterTextBold'>
                  Register
                </div>
              </div>
              <div className='LoginButton'>Login</div>
            </div>
            <div className='LoginFormRight'></div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
