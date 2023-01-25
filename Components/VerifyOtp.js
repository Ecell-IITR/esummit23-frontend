import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import FetchApi from '../utils/fetchAPI';
import { OTP_SIGNUP_VERIFY_API } from '../utils/APIs';
import OtpInput from 'react-otp-input';
import { Authenticate, isAuthenticated } from '../utils';
import { useRouter } from 'next/router';
function Verify(props) {
  const [OTP, setOTP] = useState('');
  const router = useRouter();

  let hideEmail = function (email) {
    return email.replace(/(.{2})(.*)(?=@)/, function (gp1, gp2, gp3) {
      for (let i = 0; i < gp3.length; i++) {
        gp2 += '*';
      }
      return gp2;
    });
  };

  function validateNumber(str) {
    let re = /^\d+$/.test(str);
    return !re;
  }
  function submit2() {
    if (OTP.length != 6 || validateNumber(OTP)) {
      toast.error('Please enter a valid OTP');
    } else {
      const data = {
        otp: OTP,
        email: props.email,
      };
      FetchApi('POST', OTP_SIGNUP_VERIFY_API, data)
        .then((res) => {
          Authenticate(res.data.n, res.data.e_id, res.data.at);
          localStorage.setItem('userRoleType', res.data.role);

          router.push('tickets/tickets');
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error);
        });
    }
  }
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
          <div className='forgotPasswordHeader'>Verify OTP</div>
          <div className='forgotPasswordSubHeader3'>
            Enter OTP send to {hideEmail(props?.email)}
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

          <button
            onClick={() => {
              submit2();
            }}
            className='forgotPasswordButtonContainer'
          >
            Verify
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Verify;
