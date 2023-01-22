import React from 'react'
import Image from 'next/image';

const EventCard = (props) => {
  return (
    <>      
       <div className='eventPgFlex'>
            <div className='eventPgCards' style={{ height: '30rem', marginBottom: '5rem' }}>
              <div className='eventcimg'>
                <Image
                  src={props.Profile_Image}
                  height='220px'
                  width='376px'
                />
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
                  {props.event_Name}
                </h2>
                <div
                  className='eventPgDesc'
                  dangerouslySetInnerHTML={props.card_Description}
                  style={{ textAlign: 'initial', lineHeight: '19px' }}
                ></div>

                <a
                  classname='eventPga'
                  style={{ marginTop: '-50rem' }}
                  href={'/events/' + props.event_Name}
                >
                  Read more
                </a>
              </div>

              <div className='eventPgBtnC' style={{ marginTop: '1.5rem' }}>
                  <a
                    style={{ color: 'transparent' }}
                    href='https://docs.google.com/forms/d/1bYuLAoCbFzO2SDpSn0uYShaDYvyEmuXmYPtp1IUILX4/viewform?edit_requested=true'
                  >
                    <button className='eventPgBtn'>Register Now</button>
                  </a>
             
                 
                <Image src='/Vector.png' height='16px' width='21.3px'/>
              </div>
            </div>
      </div>        
        
    </>
  )
}

export default EventCard
