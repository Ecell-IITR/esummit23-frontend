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
              Clicker(599, 'Standard Student pass', 999);
            }}
            className='TicketDisplayImage'
            src='/SSP.png'
          />
          <img
            onClick={() => {
              Clicker(1499, 'Premium Student pass', 1999);
            }}
            className='TicketDisplayImage2'
            src='/PSP.png'
          />
          <img
            onClick={() => {
              Clicker(1999, 'Profestional pass', 2499);
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