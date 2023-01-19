import React , {useState} from 'react'
import {RAZORPAY_GET_ORDER_ID} from '../utils/APIs'
import FetchApi from '../utils/fetchAPI';

function rzp() {
    const [name, setName] = useState("Pranav Arya");
    const [email, setEmail] = useState("pranavleo22@gmail.com");
    const [amount, setAmount] = useState("100");
    const [Data, setData] = useState({})
    // const [data, setData] = useState();
    
    
const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    let data=[]
    // Make API call to the serverless API
    FetchApi('POST', RAZORPAY_GET_ORDER_ID, {name:name,amount:amount})
    .then((res) =>
    console.log(res),
      setData(res.data)
    );
    console.log(data);
    let options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Esummit'23",
      currency: "INR",
      amount: Data?.amount,
      order_id: Data?.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Pranav Arya",
        email: email,
        contact: "9833290022",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
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
    <div>rzp

    <button onClick={makePayment}>Pay</button>

    </div>
  )
}

export default rzp



