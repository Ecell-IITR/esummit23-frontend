import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import FetchApi from '../utils/fetchAPI';
import { OTP_API } from '../utils/APIs';
import { data } from 'jquery';
function ForgotPassword(props) {
  const [email, setEmail] = useState('');
  const [Rid, setRid] = useState(0);
  const submit1 = () => {
    // if (
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    //     email
    //   )
    // ) {

    data = { email: email };
    FetchApi('GET', OTP_API, data, null)
      .then((res) => {
        console.log(res);
        toast.success('OTP sent to your mail');
      })
      .catch((err) => {
        toast.error('Please retry later');
        console.log(err.response.config.data)
      });
    // } else {
    //   toast.error('Please enter a valid email address');
    // }
  };
  if (Rid == 0) {
    return (
      <>
        <Modal
          contentClassName='forgot-modal'
          show={props.show}
          onHide={props.handleClose}
        >
          <div className='forgotPasswordContainer'>
            <div className='forgotPasswordHeader'>Forgot Password</div>
            <div className='forgotPasswordSubHeader'>
              Enter Your Mail Address to Receive an OTP
            </div>
            <div className='forgotPasswordInputContainer'>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={
                  email == ''
                    ? 'LoginFormLeftInput'
                    : 'LoginFormLeftInput inputGold'
                }
                type='text'
                placeholder='Enter the mail id'
              />
            </div>
            <button onClick={submit1} className='forgotPasswordButtonContainer'>
              Get Otp
            </button>
          </div>
        </Modal>
      </>
    );
  }
  // else {
  //   return (
  //     <>
  //       <Modal
  //         contentClassName='forgot-modal'
  //         show={props.show}
  //         onHide={props.handleClose}
  //       >
  //         <div className='forgotPasswordContainer'>
  //           <div className='forgotPasswordHeader'>Forgot Password</div>
  //           <div className='forgotPasswordSubHeader'>
  //             Enter Your Mail Address to Receive an OTP
  //           </div>
  //           <div className='forgotPasswordInputContainer'>
  //             <input
  //               value={email}
  //               onChange={(e) => {
  //                 setEmail(e.target.value);
  //               }}
  //               className={
  //                 email == ''
  //                   ? 'LoginFormLeftInput'
  //                   : 'LoginFormLeftInput inputGold'
  //               }
  //               type='text'
  //               placeholder='Enter the mail id'
  //             />
  //           </div>
  //           <button
  //             onClick={() => {
  //               submit1();
  //             }}
  //             className='forgotPasswordButtonContainer'
  //           >
  //             Get Otp
  //           </button>
  //         </div>
  //       </Modal>
  //     </>
  //   );
  // }
}

export default ForgotPassword;
