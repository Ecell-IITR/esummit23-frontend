import React from 'react';
import Image from 'next/image';




const SpeakerCard = (props) => {
  
  return (
  <div  style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    background: 'linear-gradient(180deg, #12100E 0%, #301A08 100%)',
  }}> 
  <div className='speakerBtnAndTextContainer'>
          <div className='homepageSpeakerText'>{props.Heading}</div>
          <button onClick={props.HandleSubmit} className='viewAllSpeakersBtn'>{props.BtnText}</button>
        </div>
        <div
          style={{
            // width: '93%',
            width: '93vw',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
        >
                <div className='sponsorCard' key={props.Id}>
                  <Image
                    className='sponsorCardImage'
                    src={props.profile_Image}
                    height={484}
                    width={416}
                  ></Image>
                  <div className='sponsorCardDescription'>
                    <div className='sponsorCardYear'>{props.event_Year}</div>
                    <div
                      className='sponsorCardBox'
                      style={{
                        display: 'flex',
                        gap: '8px',
                        flexDirection: 'column',
                      }}
                    >
                      <div className='sponsorCardName'>{props.Name}</div>
                      <div className='sponsorCardCompany'>
                        {props.Designation}
                      </div>
                      <div className='sponsorcardText' style={{ zIndex: '5' }}>
                        <div className='sponsorCardCompany1'>
                          {props.Description}
                        </div>
                        <div className='sponsorCardCompany1'>
                          {props.Description}
                        </div>
                        <div className='sponsorCardCompany1'>
                          {props.Description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
            );         
        </div>
        </div>
  )
 
};
export default SpeakerCard;



