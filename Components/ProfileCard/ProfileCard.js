import React from 'react';
import Image from 'next/image';
function ProfileCard({name ,esummit_id}) {
  return (
    <>
      <div className='containerProfile'>
        <div className='profileImage'>{name[0]}</div>
        <div className='profileInfo'>
          <div className='nameProfile'>{name}</div>
          <div className='summitIdProfile'>Esummit ID - {esummit_id}</div>
          <div className='viewFullProfile'>
            <div className='hyperlinkProfile'>
              <a href='' style={{ color: '#E5BF75' }}>
                View full profile
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
