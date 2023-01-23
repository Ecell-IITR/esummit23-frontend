import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import FetchApi from '../utils/fetchAPI';
import { RAZORPAY_GET_ORDER_ID, RAZORPAY_CALLBACK } from '../utils/APIs';

import {getAuthToken,isAuthenticated} from '../utils'
import { useRouter } from 'next/router';
function QM(props) {
  const [Number, setNumber] = useState(1);
  const router = useRouter()
  const makePayment = async (amount,name=props.name) => {
    
    const res = await initializeRazorpay();

    if (!res) {
      alert('Razorpay SDK Failed to load');
      return;
    }
    // Make API call to the serverless API
    FetchApi('POST', RAZORPAY_GET_ORDER_ID, {
      name: props.name,
      amount: amount,
    }).then((res) => {
      console.log(process.env);
      let options = {
        key: 'rzp_live_U0W39W3I1yR00g', // Enter the Key ID generated from the Dashboard
        name: "Esummit'23",
        currency: 'INR',
        amount: res.data?.amount,
        order_id: res.data?.orderId,
        description: 'TIcket Payment',
        image: 'https://manuarora.in/logo.png',

        handler: async function (response) {
          const data = {
            response: response,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            plan:props.pass,
            quantity:Number  };
          console.log(response);
          // Validate payment at server - using webhooks is a better idea.
          FetchApi('POST', RAZORPAY_CALLBACK, data, getAuthToken()).then((res) => {
              router.push("/tickets/sucess")
          });
          console.log(response);
        },
        prefill: {
          name: props.name,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

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
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div className='forgotPasswordHeader'>Number of tickets</div>
            <br />
            <div className='forgotPasswordSubHeader3'>
              How many tickets you want to buy ?
            </div>
            <input
              value={Number}
              type='number'
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className='ticketInput'
            />
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: '3rem',
              }}
            >
              <div
                style={{ fontWeight: '500', color: '#ffffff' }}
                className='forgotPasswordSubHeader3'
              >
                {props.pass} x {Number}
              </div>

              <div
                style={{ fontWeight: '500', color: '#ffffff' }}
                className='forgotPasswordSubHeader3'
              >
                &#8377;{Number * props.orgAmount}
              </div>
            </div>
            
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div
                style={{ fontWeight: '500', color: '#6FCF97' }}
                className='forgotPasswordSubHeader3'
              >
                Early bird Discount
              </div>

              <div
                style={{ fontWeight: '500', color: '#6FCF97' }}
                className='forgotPasswordSubHeader3'
              >
                -&#8377;{Number * (props.orgAmount-props.amount)}
              </div>
            </div>
            <div className='TicketLine' ></div>

            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: '1rem',
              }}
            >
              <div
                style={{ fontWeight: '600', color: '#ffffff' }}
                className='forgotPasswordSubHeader3'
              >
                Grand Total
              </div>

              <div
                style={{ fontWeight: '600', color: '#ffffff' }}
                className='forgotPasswordSubHeader3'
              >
                &#8377;{Number * (props.amount)}
              </div>
            </div>

          </div>
          <button
            onClick={() => {
                makePayment(Number * (props.amount),"pr")
            }}
            className='forgotPasswordButtonContainer'
          >
            Pay
          </button>
        </div>
      </Modal>
    </>
  );
}

export default QM;
