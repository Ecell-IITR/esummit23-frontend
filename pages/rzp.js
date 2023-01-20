import React, { useState } from 'react';
import { RAZORPAY_GET_ORDER_ID, RAZORPAY_CALLBACK } from '../utils/APIs';
import FetchApi from '../utils/fetchAPI';

function rzp() {
  const [name, setName] = useState('Pranav Arya');
  const [email, setEmail] = useState('pranavleo22@gmail.com');
  const [amount, setAmount] = useState('100');
  const [Data, setData] = useState({});
  // const [data, setData] = useState();

  const makePayment = async () => {
    console.log('here...');
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
          email: email,
          contact: '9833290022',
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
    <div>
      rzp
      <button onClick={makePayment}>Pay</button>
    </div>
  );
}

export default rzp;
