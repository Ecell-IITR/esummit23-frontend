import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function sucess() {
  const [name, setName] = useState('');
  const [Id, setId] = useState('');
  const [Amount, setAmount] = useState(0);
  const [Org, setOrg] = useState(0);
  const [Pass, setPass] = useState('');
  const [show, setShow] = useState('');
const router=useRouter();
  const handleClose = () => setShow(false);
  useEffect(() => {
    const nam = localStorage.getItem('name');
    setName(nam);
    setId(localStorage.getItem('id'));
  }, []);

  return (
    <>
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
        <div className='TicketHeader4'>Congratulations</div>
        <div className='TicketHeader5'>Your Payment is successful</div>
        <div className='TicketHeader6'>
          Your E-Summit pass will be sent to you respective email ID
        </div>
      </div>
    </>
  );
}

export default sucess;
