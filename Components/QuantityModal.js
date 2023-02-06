import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import FetchApi from '../utils/fetchAPI';
import { RAZORPAY_GET_ORDER_ID, RAZORPAY_CALLBACK } from '../utils/APIs';

import { getAuthToken, isAuthenticated } from '../utils';
import { useRouter } from 'next/router';
function QM(props) {
  const [Number, setNumber] = useState(1);
  const [RFC, setRFC] = useState("")
  const router = useRouter();
  const makePayment = async (amount, name = props.name) => {
    
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
                 Discount
              </div>

              <div
                style={{ fontWeight: '500', color: '#6FCF97' }}
                className='forgotPasswordSubHeader3'
              >
                -&#8377;{Number * (props.orgAmount - props.amount)}
              </div>
            </div>
            <div className='TicketLine'></div>

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
                &#8377;{Number * props.amount}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              makePayment(Number * props.amount, 'pr');
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
