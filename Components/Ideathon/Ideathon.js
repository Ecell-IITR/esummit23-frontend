import React from 'react';
// import Navbar from "../Navbar/Navbar"
// import axios from 'axios';
// import {useState, useEffect} from 'react';
// import { ALL_EVENTS_API } from '../../utils/APIs';
import event from './Eventstype';

export default function Ideathon({ data }) {
  // const [data, setdata] = useState([]);
  console.log(data);
  // setdata(data);

  return (
    <>
      <div className='ideaThon-main'>
        <div className='ideaThon-bg'>
          {/* {data.map((dat,id) => { 
          <div className='ideaBox1'>
              <div className='idea-Text1'>{dat.NAME}</div>
              <p className='idea-Text2'>{dat.Description}</p>
        </div> 
      })} */}
          <div className='ideaBox1'>
            <div className='idea-Text1'>IDEASTORM</div>
            <div className='idea-Text2'>
            The ​Ideastorm is the annual case-building 
            </div>
            <button className='idea-Button'>
              <span className='iBT'>APPLY NOW</span>
            </button>
          </div>
        </div>
        <div >
          {event.map((curr, index) => {
            return (
              <div className='yellowBox' key={index}>
                <div className='yBox1'>
                  <div className='boxHead1'>Event Type</div>
                  <div className='boxContent1'>{curr.EventType}</div>
                </div>
                <div className='yBox2'>
                  <div className='boxHead1'>Registration Starts</div>
                  <div className='boxContent1'>{curr.Registration_Starts}</div>

                </div>
                <div className='yBox3'>
                  <div className='boxHead1'>Registration Ends</div>
                  <div className='boxContent1'>{curr.Registration_Ends}</div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/events/Ideastorm');
  const data = await res?.json();
  console.log(data);
  console.log(res);
  return {
    props: {
      data,
    },
  };
}
