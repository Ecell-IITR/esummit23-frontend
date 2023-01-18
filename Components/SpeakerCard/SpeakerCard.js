import React from 'react';
import Image from 'next/image';
import axios from 'axios';

const SpeakerCard = (props) => {
  const { Data } = props;
  return Data.map((Elements) => {
    return (
    <div key={Elements.id}>
      <div className='sponsorCard'>
        <Image
          className='sponsorCardImage'
          src={Elements.URL}
          height={484}
          width={416}
        />
        <div className='sponsorCardDescription'>
          <div className='sponsorCardYear'>{Elements.Year}</div>
          <div
            className='sponsorCardBox'
            style={{
              display: 'flex',
              gap: '8px',
              flexDirection: 'column',
            }}
          >
            <div className='sponsorCardName'>{Elements.FounderName}</div>
            <div className='sponsorCardCompany'>CEO Founder of {Elements.OrganisationName}</div>
            <div className='sponsorcardText' style={{ zIndex: '5' }}>
                <div className='sponsorCardCompany1'>{Elements.briefDescription1}</div>
                <div className='sponsorCardCompany1'>{Elements.briefDescription2}</div>
                <div className='sponsorCardCompany1'>{Elements.briefDescription3}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
});
}
export async function getStaticProps() {
  const res = await axios.get('');
  const Data = res.data;
  return {
    props: { 
      Data: [
        {id: 1, URL: '', Year: 2022, FounderName: 'Divya', OrganisationName: 'ABCD',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  }
      ] 
  }
  };
}

export default SpeakerCard;
