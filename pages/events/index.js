import { ALL_EVENTS_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../Components/Navbar';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../utils';
import { SINGLE_SERVICES } from '../../utils/APIs';
import DashboardForm from '../../Components/DashboardForm';
import { Modal } from 'react-bootstrap';
export default function Events({ posts }) {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [No, setNo] = useState(0);
  const [question1, setquestion1] = useState('');
  const [question2, setquestion2] = useState('');
  const handleClose = () => setShow(false);
  const router = useRouter();

  const GetData = (name) => {
    FetchApi('POST', SINGLE_SERVICES, { service_name: name }, null)
      .then((res) => {
        setName(res.data.name);
        setquestion1(res.data.question1);
        setquestion2(res.data.question2);
        setNo(res.data.no_of_QA);
      })
      .catch((err) => {});
  };

  const rederict = () => {
    if (isAuthenticated()) {
      router.push(`/dashboard`);
    } else {
      router.push(`/login`);
    }
  };
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const rotation = window.innerWidth;
    setWidth(rotation);
  });

  return (
    <div className='eventPgCont'>
      <div style={{}}>
        <Navbar />
      </div>

      <Modal contentClassName='my-modal' show={show} onHide={handleClose}>
        <DashboardForm
          Auth={true}
          handleClose={handleClose}
          noQuestions={No}
          name={name}
          Q_1={question1}
          Q_2={question2}
        />
      </Modal>
      <div className='eventPgHdng'>
        Events{' '}
        {width < 450 ? (
          <>
            <br />
          </>
        ) : (
          <></>
        )}
        and{' '}
        {width < 450 ? (
          <>
            <br />
          </>
        ) : (
          <></>
        )}{' '}
        Competitions
      </div>

      <div className='eventPgFlex'>
        {posts?.map((post, id) => {
          return (
            <div className='eventPgCards' style={{ height: '27rem' }}>
              <div className='eventcimg'>
                <Image
                  src={
                    post?.card_image ? post?.card_image : '/Rectangle 118.png'
                  }
                  height='220px'
                  width='376px'
                ></Image>
              </div>
              <div className='eventPgAbout'>
                <h2
                  style={{
                    fontFamily: 'Lexend',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '24px',
                  }}
                >
                  {post?.event_name}
                </h2>
                <div
                  className='eventPgDesc'
                  dangerouslySetInnerHTML={{ __html: post?.card_description }}
                  style={{
                    textAlign: 'initial',
                    lineHeight: '19px',
                    paddingTop: '13px',
                  }}
                ></div>

                <a
                  classname='eventPga'
                  style={{ marginTop: '-50rem' }}
                  href={'/events/' + post?.event_name}
                >
                  Read more
                </a>

                {/* ({post.card_description.length>200?post.card_description.slice(0,200):post.card_description}) */}
              </div>

              <div className='eventPgBtnC' style={{ marginTop: '1.5rem' }}>
                {post.event_name === 'Startup Expo' ? (
                  <a
                    style={{ color: 'transparent' }}
                    href='https://docs.google.com/forms/d/1bYuLAoCbFzO2SDpSn0uYShaDYvyEmuXmYPtp1IUILX4/viewform?edit_requested=true'
                  >
                    {' '}
                    <button className='eventPgBtn'>Register Now</button>
                  </a>
                ) : (
                  <button
                    className='eventPgBtn'
                    onClick={() => {
                      GetData(post?.event_name);
                      setShow(true);
                      // rederict();
                    }}
                  >
                    Register Now
                  </button>
                )}
                <Image src='/Vector.png' height='16px' width='21.3px'></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(ALL_EVENTS_API);

  const posts = await res?.json();

  return {
    props: {
      posts,
    },
  };
}
