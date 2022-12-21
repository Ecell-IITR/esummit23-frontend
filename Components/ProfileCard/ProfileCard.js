import React from 'react'
import Image from 'next/image' 
function ProfileCard() {
  return (
    <>
    <div className='containerProfile'>
        <div className='profileImage'></div>
        <div className='profileInfo'>
            <div className='nameProfile'>Mary Marlo</div>
            <div className='summitIdProfile'>Esummit ID - ES23CAP039</div>
            <div className='viewFullProfile'>
                <div className='hyperlinkProfile'><a href="" style={{color:"#E5BF75"}}>View full profile</a></div>
                <div className='checkmarkProfile'><a href=""><Image src="/checkmark.webp" height="100rem" width="100rem"></Image></a></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfileCard
