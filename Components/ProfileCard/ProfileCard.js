import React from 'react';

function ProfileCard({ name, esummit_id }) {
  return (
    <>
      <div className='containerProfile'>
        <div className='profileImage'>{name[0]}</div>
        <div className='profileInfo'>
          <div className='nameProfile'>{name}</div>
          <div className='summitIdProfile'>Esummit ID - <div style={{fontWeight:"700",color:"#DCD1AD"}}>{esummit_id}</div></div>
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