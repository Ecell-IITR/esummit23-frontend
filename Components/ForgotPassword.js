import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import FetchApi from '../utils/fetchAPI';
import { OTP_API, VERIFY_API } from '../utils/APIs';
import OtpInput from 'react-otp-input';
import Image from 'next/image';
function ForgotPassword(props) {
  const [Email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [Rid, setRid] = useState(0);
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
  let hideEmail = function (email) {
    return email.replace(/(.{2})(.*)(?=@)/, function (gp1, gp2, gp3) {
      for (let i = 0; i < gp3.length; i++) {
        gp2 += '*';
      }
      return gp2;
    });
  };
  function submit1() {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        Email
      )
    ) {
      const data = { email: Email };
      FetchApi('POST', OTP_API, data)
        .then((res) => {
          toast.success('OTP sent to your mail');
          setRid(1);
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please enter a valid email address');
    }
  }
  function validateNumber(str) {
    let re = /^\d+$/.test(str);
    return !re;
  }
  function submit2() {
    if (OTP.length != 6 || validateNumber(OTP)) {
      toast.error('Please enter a valid OTP');
    } else if (Password != ConfirmPassword) {
      toast.error('Passwords do not match');
    } else if (Password.length < 8) {
      toast.error('Password should be more than 7 letters');
    } else {
      const data = {
        otp: OTP,
        email: Email,
        password: Password,
      };
      FetchApi('POST', VERIFY_API, data)
        .then((res) => {
          toast.success('Password changed successfully');
          setRid(2);
          props.onHide();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error);
        });
    }
  }
  if (Rid == 0) {
    return (
      <>
        <Modal
          contentClassName='forgot-modal'
          show={props.show}
          onHide={props.onHide}
          centered
        >
          <div className='forgotPasswordContainer'>
            <div className='forgotPasswordHeader'>Forgot Password</div>
            <div className='forgotPasswordSubHeader'>
              Enter Your Mail Address to Receive an OTP
            </div>
            <div className='forgotPasswordInputContainer'>
              <input
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={
                  Email == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                type='text'
                placeholder='Enter the mail id'
              />
            </div>
            <button onClick={submit1} className='forgotPasswordButtonContainer'>
              Get OTP
            </button>
          </div>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal
          contentClassName='forgot-modal'
          show={props.show}
          onHide={props.handleClose}
        >
          <div
            style={{ height: '85%', paddingTop: '12.5%' }}
            className='forgotPasswordContainer'
          >
            <div className='forgotPasswordHeader'>Change Password</div>
            <div className='forgotPasswordSubHeader3'>
              Enter OTP send to {hideEmail(Email)}
            </div>
            <div className='forgotPasswordInputContainer'>
              <OtpInput
                value={OTP}
                onChange={(otp) => setOTP(otp)}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={{
                  width: '40px',
                  height: '32px',
                  borderBottom: '1px solid #DCD1AD',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  background: 'transparent',
                  fontFamily: 'Nunito Sans',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#DCD1AD',
                }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                className={
                  Password == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={ShowPassword ? 'text' : 'Password'}
                value={Password}
                placeholder='New Password'
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                className={
                  ConfirmPassword == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type={ShowConfirmPassword ? 'text' : 'Password'}
                value={ConfirmPassword}
                placeholder='Confirm New Password'
              />
              <div
                className='LoginFormLeftShowPassword'
                onClick={() => setShowConfirmPassword(!ShowConfirmPassword)}
              >
                <Image
                  width='20'
                  height='20'
                  src={
                    ShowConfirmPassword
                      ? '/Hidepassword.webp'
                      : '/Showpassword.webp'
                  }
                />
              </div>
            </div>
            <button
              onClick={() => {
                submit2();
              }}
              className='forgotPasswordButtonContainer'
            >
              Reset Password
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default ForgotPassword;
