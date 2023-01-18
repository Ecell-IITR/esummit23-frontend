import React from 'react'
import Image from 'next/image';
import axios from 'axios';


const Speaker = (props) => {
  const { Data } = props;
  return ( 
  <div className='allSpeakerContainerDiv'>
    <div className='allSpeakerContainer'>     
    <div className='speakerText'>Speaker</div>
    <div className='SpeakerDescriptionText'>Lorem ipsum dolor sit amet consectetur. Eu in pharetra pharetra nisi. Tincidunt placerat orci lacus amet arcu malesuada. Massa aliquet porttitor nunc nulla. Sed mattis commodo massa metus nulla faucibus justo quisque. Ultrices ipsum vel viverra sed orci quam mi dui rutrum. Lorem ipsum dolor sit amet consectetur. Eu in pharetra pharetra nisi. Tincidunt placerat orci lacus amet arcu malesuada. Massa aliquet porttitor nunc nulla. Sed mattis commodo massa metus nulla faucibus justo quisque. Ultrices ipsum vel viverra sed orci quam mi dui rutrum.</div>
    <div className='speakerCardContainerDiv'>
  {Data.map((Elements) => (
        <div key={Elements.id} className='sponsorCard'>
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
        
      
      ))
    }
     </div>
     </div>
    </div>)
}
export async function getStaticProps() {
  // const res = await axios.get('');
  // const Data = res.data;
  return {
    props: { 
      Data: [
        {id: '1', URL: '/speaker.png', Year: '2023', FounderName: 'Divya', OrganisationName: 'ABCD', briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  },
        {id: '1', URL: '/speaker.png', Year: '2023', FounderName: 'Divya', OrganisationName: 'ABCD', briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  },
        {id: '1', URL: '/speaker.png', Year: '2023', FounderName: 'Divya', OrganisationName: 'ABCD', briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  },
        {id: '1', URL: '/speaker.png', Year: '2023', FounderName: 'Divya', OrganisationName: 'ABCD', briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  },
        {id: '1', URL: '/speaker.png', Year: '2023', FounderName: 'Divya', OrganisationName: 'ABCD', briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  },
        {id: '1', URL: '/speaker.png', Year: '2023', FounderName: 'Divya', OrganisationName: 'ABCD', briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.',briefDescription1: 'Lorem ipsum dolor sit.', briefDescription2: 'Lorem ipsum dolor sit.', briefDescription3: 'Lorem ipsum dolor sit.'  }

      ] 
  }
  };
}

export default Speaker
