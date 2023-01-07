import React from 'react';
import Image from 'next/image';
import details from './info';

function EventCard() {
  return (
    <div className='eventscardcontainer'>
      <div className='eventchdng'>Events and competition</div>
      <div className='ecmaincontainer'>
        {details.map((curr, index) => {
          return (
            <div className='cardsevent'>
              <div className='eventc'>
                <div className='eventcimg'>
                  <Image
                    src='/Rectangle 118.png'
                    height='199px'
                    width='376px'
                  ></Image>
                </div>
                <div className='eventcabout'>
                  <h1
                    style={{
                      fontFamily: 'Lexend',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '18px',
                      lineHeight: '24px',
                    }}
                  >
                    {curr?.name}
                  </h1>
                  <p
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    {curr?.about}
                  </p>
                </div>
                <div className='eventcbuttonc'>
                  <button className='eventcbutton'> APPLY NOW </button>
                  <Image src='/Vector.png' height='16px' width='21.3px'></Image>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventCard;
