import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAuthToken, isAuthenticated, getUserRoleType } from '../../../utils';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
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
  }, []);
  const router = useRouter();

  const Clicker = (url) => {
    
      router.push(url);
    
  };

  const Clicker2 = (amount, passer, org) => {
    if (!isAuthenticated()) {
      router.push('/tickets');
    } else if (!(getUserRoleType() == 'proff')) {
      toast.error('You are not a proffessional user');
    } else {
      router.push('https://rzp.io/l/d1DNKhIf');
    }
  };

  return (
    <>
      {/* <QM
        pass={Pass}
        orgAmount={Org}
        amount={Amount}
        show={show}
        handleClose={handleClose}
        name={name}
      /> */}
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
              Clicker('https://rzp.io/l/bCXJ7yYLkS');
            }}
            className='TicketDisplayImage'
            src='/SSP.png'
          />
          <img
            onClick={() => {
              Clicker('https://pages.razorpay.com/pl_LCuvAWkqCPMwht/view?reffralcode='+router.query.slug);
            }}
            className='TicketDisplayImage2'
            src='/PSP.png'
          />
          <img
            onClick={() => {
              Clicker2();
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
