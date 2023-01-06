import React, { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import Image from 'next/image';
import { LOGIN_API } from '../utils/APIs';
import FetchApi from '../utils/fetchAPI';
import { Authenticate } from '../utils';
import {useRouter} from 'next/router'

import Link from 'next/Link';

function Login() {

  const Router= useRouter();
  const setMobile = useUpdateMobile();
  const [email, setemail] = useState();
  const [Password, setPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);

  const [pass_error, setpass_error] = useState('');

  const [pass_error_bool, setpass_error_bool] = useState(false);

  const [Role, setRole] = useState('');
  const [IsLogin, setIsLogin] = useState()

  const router = useRouter();

  const passValidate = () => {
    setTimeout(function () {
      if (Password.length < 7) {
        setpass_error_bool(true);
        setpass_error('Password should be more than 8 letters');
      } else {
        setpass_error_bool(false);
        setpass_error('');
      }
    }, 1000);
  };

  function submit() {
    if (Password.length > 7) {
      FetchApi(
        'POST',
        LOGIN_API,
        {
          esummit_id: email,
          password: Password,
        },
        null
      )
        .then((res) => {
         
          if (res.data.role){
            console.log(res);
            localStorage.setItem('userRoleType', res.data.role);



            if(localStorage.getItem('userRoleType'))
            {
              
              const roleType=localStorage.getItem('userRoleType');
            
              if(roleType=='ca')
              {                
              setRole('ca');
              }
              if(roleType=='stu')
              {
              setRole('student');
              }
              if(roleType=='professor')
              {
              setRole('professor');
              }
              if(roleType=='startup')
              {
              setRole('startup');
              }
              console.log(Role);

            }




            
          }
          Authenticate(res.data.n,res.data.e_id, res.data.at);
          router.push('/dashboard');
        })

        .catch((res) => {
          alert('Credentials are wrong');
        });
    } else {
      alert(pass_error);
    }

    setIsLogin(1);
    Router.push({
      pathname:'/dashboard'
    })


    




  }


  useEffect(() => {
    setMobile();
  }, []);

  if (useMobile().isMobile) {
    return (
      <div className='LoginContainer'>
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
        <div className='LoginForm'>
          <div className='LoginFormLeft'>
            <div style={{ width: '200px', height: '100px' }}>
              <Image width='294' height='77' src='/summitLogo.png' />
            </div>
            <h1 className='LoginFormLeftTitle'> Welcome Back </h1>
            <div className='LoginFormBlack'>
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    passValidate();
                  }}
                  type={ShowPassword ? 'text' : 'Password'}
                  value={Password}
                  placeholder='Passsword'
                />
                <div
                  className='LoginFormLeftShowPassword'
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  <Image
                    width='20'
                    height='20'
                    src={
                      ShowPassword ? '/Hidepassword.webp' : '/Showpassword.webp'
                    }
                  />
                </div>
              </div>
              {/* <div className='loginOrContainer'>
                <div className='loginOrLine'></div>
                <div className='loginOrText'>OR</div>
                <div className='loginOrLine'></div>
              </div> */}

              <div

                className='LoginButton'
                onClick={() => {
                  router.push('/dashboard');
                  submit();
                }}
              >
                Login
              </div>
              <div className='loginRegisterContainer'>
                <div className='loginRegisterText'>New to Esummit?</div>
                <Link href='/register'>
                  <div className='loginRegisterText loginRegisterTextBold'>
                    Register
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type='text'
                value={email}
                placeholder='Esummit id'
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  style={
                    pass_error_bool ? { borderBottom: '1px solid red' } : {}
                  }
                  className={
                    Password == ''
                      ? 'LoginFormLeftInput'
                      : 'LoginFormLeftInput inputGold'
                  }
                  onChange={(e) => {
                    setPassword(e.target.value);
                    passValidate();
                  }}
                  type={ShowPassword ? 'text' : 'Password'}
                  value={Password}
                  placeholder='Passsword'
                />
                <div
                  className='LoginFormLeftShowPassword'
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  <Image
                    width='20'
                    height='20'
                    src={
                      ShowPassword ? '/Hidepassword.webp' : '/Showpassword.webp'
                    }
                  />
                </div>
              </div>
              {/* <div className='loginOrContainer'>
                <div className='loginOrLine'></div>
                <div className='loginOrText'>OR</div>
                <div className='loginOrLine'></div>
              </div> */}


              <div
              
              style={  { }    }
              
                className='LoginButton'
                onClick={() => {
                  
                  submit();
                }}
              >
                Login
              </div>



              <div className='loginRegisterContainer'>
                <div className='loginRegisterText'>New to Esummit?</div>
                <Link href='/register'>
                  <div  className='loginRegisterText loginRegisterTextBold'>
                    Register
                  </div>
                </Link>
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
