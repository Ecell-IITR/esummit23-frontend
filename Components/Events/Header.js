import React from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../utils';
import Navbar from '../Navbar';
export default function Header(props) {
  const router = useRouter();
  const rederict = () => {
    if (isAuthenticated()) {
      router.push(`/dashboard`);
    } else {
      router.push(`/login`);
    }
  };
  const OnSubmit = () => {
    props.setShow(true);
    props.GetData(props.name);
  };

  return (
    <>
      <Navbar />
      <div className='ideaThon-main'>
        <div
          style={{ backgroundImage: `url(${props.card})` }}
          className='ideaThon-bg'
        >
          <div className='ideaBox1'>
            <div className='idea-Text1'>{props.name}</div>
            <div className='idea-Text2'>{props.tagline}</div>
            <div className='idea-text3'>
              {router.query.slug === 'Startup Expo' ? (
                <a
                  style={{ color: 'transparent' }}
                  href='https://docs.google.com/forms/d/1bYuLAoCbFzO2SDpSn0uYShaDYvyEmuXmYPtp1IUILX4/viewform?edit_requested=true'
                >
                  {' '}
                  <button className='idea-Button'>
                    <span className='iBT'>REGISTER NOW</span>
                  </button>
                </a>
              ) : (
                <button onClick={OnSubmit} className='idea-Button'>
                  <span className='iBT'>REGISTER NOW</span>
                </button>
              )}
            </div>
          </div>
          <div className='ideaBox2'></div>
        </div>
        <div style={{ minHeight: '20rem' }}>
          <div className='yellowBox'>
            <div className='yBox1'>
              <div className='boxHead1'>Event Type</div>
              <div className='boxContent1'>{props.type}</div>
            </div>
            <div className='yBox2'>
              <div className='boxHead1'>Registration Starts</div>
              <div className='boxContent1'>{props.start}</div>
            </div>
            <div className='yBox3'>
              <div className='boxHead1'>Registration Ends</div>
              <div className='boxContent1'>{props.end}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
