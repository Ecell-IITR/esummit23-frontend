import React from 'react';
import Image from 'next/image';
function ProfileCard(props) {
  return (
    <>
      <div className='containerProfile'>
        <div className='profileImage'>
           
        </div>
        <div className='profileInfo'>
          <div className='nameProfile'>{props.name}</div>
          <div className='summitIdProfile'>Esummit ID - {props.esummit_id}</div>
          <div className='viewFullProfile'>
            <div className='hyperlinkProfile'>
              <a href='' style={{ color: '#E5BF75' }}>
                View full profile
              </a>
            </div>
            <div className='checkmarkProfile'>
              <Image
                src='/checkmark.webp'
                height='100rem'
                width='100rem'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
