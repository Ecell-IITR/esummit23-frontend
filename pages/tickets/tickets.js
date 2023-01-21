import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RAZORPAY_GET_ORDER_ID, RAZORPAY_CALLBACK } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { getAuthToken, isAuthenticated } from '../../utils';
import { useRouter } from 'next/router';
import QM from '../../Components/QuantityModal';
function tickets() {
  const [name, setName] = useState('');
  const [Id, setId] = useState('');
  const [Amount, setAmount] = useState(0);
  const [Org, setOrg] = useState(0);
  const [Pass, setPass] = useState('');
  const [show, setShow] = useState('');

  const handleClose = () => setShow(false);
  useEffect(() => {
    const nam = localStorage.getItem('name');
    setName(nam);
    setId(localStorage.getItem('id'));
    console.log(nam);
  }, []);
  const router = useRouter();

  const makePayment = async (amount) => {
    if (!isAuthenticated()) {
      router.push('/tickets');
    }
    const res = await initializeRazorpay();

    if (!res) {
      alert('Razorpay SDK Failed to load');
      return;
    }
    let data = [];
    // Make API call to the serverless API
    FetchApi('POST', RAZORPAY_GET_ORDER_ID, {
      name: name,
      amount: amount,
    }).then((res) => {
      setData(res.data);
      console.log(process.env);
      let options = {
        key: 'rzp_live_U0W39W3I1yR00g', // Enter the Key ID generated from the Dashboard
        name: "Esummit'23",
        currency: 'INR',
        amount: res.data?.amount,
        order_id: res.data?.orderId,
        description: 'Test Website',
        image: 'https://manuarora.in/logo.png',

        handler: async function (response) {
          const data = {
            response: response,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          console.log(response);
          // Validate payment at server - using webhooks is a better idea.
          FetchApi('POST', RAZORPAY_CALLBACK, data, null).then((res) => {
            console.log(res);
            
          });
          console.log(response);
        },
        redirect: true,
        prefill: {
          name: 'Pranav Arya',
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

  const Clicker = (amount, passer, org) => {
    if (!isAuthenticated()) {
      router.push('/tickets');
    } else {
      setAmount(amount);
      setPass(passer);
      setOrg(org);
      setShow(true);
    }
  };

  return (
    <>
      <QM
        pass={Pass}
        orgAmount={Org}
        amount={Amount}
        show={show}
        handleClose={handleClose}
        name={name}

      />
      <div className='TicketBackground'>
        <div className='TicketHeader'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '200px',
              height: '100px',
            }}
          >
            <Image width='294' height='77' src='/summitLogo.png' />
          </div>

          <div className='TicketChild'>
            <div className='TicketHeaderName'>{name}</div>
            <div className='TicketHeaderID'>{Id}</div>
          </div>
        </div>
        <div className='TicketHeader2'>Select Your E-Summit Pass</div>
        <div className='TicketHeader3'>
          Choose an appropriate plan for your Summit Pass
        </div>
        <div className='TicketDisplayContainer'>
          <img
            onClick={() => {
              Clicker(1, 'student pass', 2);
            }}
            className='TicketDisplayImage'
            src='/SSP.png'
          />
          <img
            onClick={() => {
              Clicker(1, 'student pass', 2);
            }}
            className='TicketDisplayImage2'
            src='/PSP.png'
          />
          <img
            onClick={() => {
              Clicker(1, 'student pass', 2);
            }}
            className='TicketDisplayImage'
            src='/PP.png'
          />
        </div>
      </div>
    </>
  );
}

export default tickets;
