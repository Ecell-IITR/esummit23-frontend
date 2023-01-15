import React from 'react';
import Image from 'next/image';
const SpeakerCard = () => {
  return (
    <div>
      <div className='sponsorCard'>
        <Image
          className='sponsorCardImage'
          src='/speaker.png'
          height={484}
          width={416}
        ></Image>
        <div className='sponsorCardDescription'>
          <div className='sponsorCardYear'>2022</div>
          <div
            className='sponsorCardBox'
            style={{
              display: 'flex',
              gap: '8px',
              flexDirection: 'column',
            }}
          >
            <div className='sponsorCardName'>Mary Colson</div>
            <div className='sponsorCardCompany'>CEO Founder of XYZ</div>
            <div className='sponsorcardText' style={{ zIndex: '5' }}>
              <div className='sponsorCardCompany1'>CEO Founder of XYZ</div>
              <div className='sponsorCardCompany1'>CEO Founder of XYZ</div>
              <div className='sponsorCardCompany1'>CEO Founder of XYZ</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='' style={{width:"100vw",height:"100vh"}}></div> */}
    </div>
  );
};

export default SpeakerCard;
