import React from 'react';

import event from './Eventstype';

export default function Header(props) {
  // const [data, setdata] = useState([]);
  console.log(props);
  // setdata(data);

  return (
    <>
      <div className='ideaThon-main'>
        <div
          style={{ backgroundImage: "url('/Login.png')" }}
          className='ideaThon-bg'
        >
          <div className='ideaBox1'>
            <div className='idea-Text1'>{props.name}</div>
            <div className='idea-Text2'>
             {props.tagline}
            </div>
            <button className='idea-Button'>
              <span className='iBT'>APPLY NOW</span>
            </button>
          </div>
          <div className='ideaBox2'></div>
        </div>
        <div>
          {event.map((curr, index) => {
            return (
              <div className='yellowBox' key={index}>
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
            );
          })}
        </div>
      </div>
    </>
  );
}
