import React from 'react'
import Image from 'next/image';
import axios from 'axios';
import  { SPEAKER_DETAIL_API  } from '../utils/APIs';


const Speaker = (props) => {
  const { Data } = props;
  return ( 
  <div className='allSpeakerContainerDiv'>
    <div className='allSpeakerContainer'>     
    <div className='speakerText'>Speaker</div>
    <div className='SpeakerDescriptionText'>E-summit, IIT Roorkee is known for the quality speaker sessions, it brings to the table. Speakers are enthusiastic about sharing their knowledge, thrilling experiences, and insights. Here comes the time for more amazing sessions, catering to every segment of the audience, students, professors, and investors.
</div>
    <div className='speakerCardContainerDiv'>
  {Data && Data.map((Elements) => (
        <div key={Elements.id} className='sponsorCard'>
          <Image
            className='sponsorCardImage'
            src={Elements.profile_image}
            height={484}
            width={416}
          />
          <div className='sponsorCardDescription'>
            <div className='sponsorCardYear'>{Elements.event_year}</div>
            <div
              className='sponsorCardBox'
              style={{
                display: 'flex',
                gap: '8px',
                flexDirection: 'column',
              }}
            >
              <div className='sponsorCardName'>{Elements.name}</div>
              <div className='sponsorCardCompany'> {Elements.designation}</div>
              <div className='sponsorcardText' style={{ zIndex: '5' }}>
                  <div className='sponsorCardCompany1'>{Elements.briefDescription1}</div>
                  <div className='sponsorCardCompany1'>{Elements.briefDescription2}</div>
                  <div className='sponsorCardCompany1'>{Elements.briefDescription3}</div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
     </div>
     </div>
    </div>)
}

export default Speaker
export async function getServerSideProps() {
  const res = await axios.get(SPEAKER_DETAIL_API); 
  const Data = res.data;
  console.log(Data)
  return {
    props: {Data}
  }
}
