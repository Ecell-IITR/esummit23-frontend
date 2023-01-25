import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import React from 'react';
import Image from 'next/image';
import Animation from '../Components/Animation';
import Lottie from 'react-lottie';
import SecondLandingPage from '../Components/SecondLandingPage';
import ThirdLandingPage from '../Components/ThirdLandingPage';
import SpeakerCard from '../Components/Homepage/SpeakerCard';
import { SPEAKER_DETAIL_API } from '../utils/APIs';
import axios from 'axios';
import Footer from '../Components/Footer/Footer';
import Events from '../pages/events';
import { ALL_EVENTS_API } from '../utils/APIs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FetchApi from '../utils/fetchAPI';
import { isAuthenticated } from '../utils';
import { SINGLE_SERVICES } from '../utils/APIs';

export default function Home(props) {
  const { Data } = props;
  const { Posts } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/coming.json',
  };
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
    <>
      {/* <Navbar /> */}
      {/* <div className='LottieContainer'>
        <Lottie options={defaultOptions} />
      </div> */}

      <div className='Seo-text'>
        <p>
          To find a way out of the darkness that has engulfed us over the past
          two years, the Indian youth needs to take on the mantle and show us
          the path to a new world where optimism, creativity, innovation, and
          ambition thrive. The new edition of Entrepreneurship Summit is a 3-day
          event that is being organized with the vision of providing a platform
          that stimulates discussion on ideas that possess the potential to turn
          the issues troubling us into an opportunity to revolutionize the
          world. E-Summit 23 will present rays of hope so dazzling that they
          penetrate even the darkness that veils our eyes.
        </p>
      </div>
      <div className='Seo-text'>
        <p>
          Global leadership summit Global entrepreneurship summit International
          entrepreneurship summit Summit international School events School
          event ideas High school track events Hackathon What is a hackathon
          Virtual hackathon Community Fest Tickets Startup Startup school Go
          fund me Management fest
        </p>
      </div>
      <div className='Seo-text'>
        <p>
          E-Summit 2023 organized by ecell IIT Roorkee will bring every one with
          lithora of opportunity.Esummit 2022 organized between 21 Jan to 23 Jan
          which promates the idea of startup india also giving opportunity of
          networkink funding and much more. Hope to see you in E-summit 22
          organized by IIT Roorkee
        </p>
      </div>
      <div className='Seo-text'>
        <p>
          IIT Bombay will host the E-Summit'23 aims to provide a platform for
          discussion on innovative ideas that have the potential to transform
          current challenges into opportunities for positive change. The goal of
          the event is to inspire and offer rays of hope to attendees.
        </p>
      </div>
      <div className='Seo-text'>
        <p>
          E-Summit 22 is organised by E-Cell IIT Roorkee which is one of the
          Largest Entrepreneurship Promoting college body in Asia.E-Summit has
          hosted some of the most prominent stalwarts of the industry over the
          years including but not limited to Startup expo, speaker events and
          much more{' '}
        </p>
      </div>
      <Animation />

      <div>
        <SecondLandingPage />
      </div>
      <div>
        <ThirdLandingPage />
        <div></div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(180deg, #12100E 0%, #301A08 100%)',
          }}
        >
          <div
            style={{
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className='headingAndBtnContainerDiv2'>
              <div className='EventsAndCompetitionsContainer2'>
                Events and Competitions
              </div>
              <Link rel='stylesheet' href='/events'>
                <button className='ViewAllEventsBtn2'>View all Events</button>
              </Link>
            </div>

            <div className='eventsCardFlexContainerDiv2'>
              {Posts &&
                Posts.map((Post, id) => {
                  return (
                    <div className='eventCardContainerDiv2'>
                      <div className='eventImageContainerDiv2'>
                        <Image
                          src={
                            Post?.card_image
                              ? Post?.card_image
                              : '/Rectangle 118.png'
                          }
                          height='230px'
                          width='350px'
                          alt={props.eventImageDescription}
                        />
                      </div>
                      <div className='eventTextContainer2'>
                        <div className='eventNameTextContainerDiv2'>
                          {Post.event_name}
                        </div>
                        <div
                          className='eventShortDescriptionContainerDiv2'
                          dangerouslySetInnerHTML={{
                            __html: Post.card_description,
                          }}
                        ></div>
                        <div className='ReadMoreContainerDiv'>
                          <a href=''>Read more</a>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          GetData(Post?.event_name);
                          setShow(true);
                        }}
                        className='eventBtnAndArrowContainerDiv2'
                      >
                        <span className='applyNowSpan2'>Apply Now</span>
                        <Image src='/vector.png' height='12px' width='16px' />
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div style={{ width: '100vw' }}>
            {Data &&
              Data.map((Element) => {
                return (
                  <SpeakerCard
                    Heading='Speaker'
                    BtnText='View All Speakers'
                    Id={Element.id}
                    profile_Image={Element.profile_image}
                    event_Year={Element.event_year}
                    Name={Element.name}
                    Designation={Element.designation}
                    Description={Element.description}
                  />
                );
              })}
          </div>
          <div
            style={{
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await axios.get(SPEAKER_DETAIL_API);
  const resolve = await axios.get(ALL_EVENTS_API);
  const Posts = resolve.data;
  const Data = res.data;
  console.log(Posts);
  return { props: { Data, Posts } };
}
