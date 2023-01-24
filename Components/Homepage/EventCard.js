import React from 'react'
import Image from 'next/image';

const EventCard = (props) => {
  return (
    <>
    <div className='eventCardContainerDiv2'>
      <div className='eventImageContainerDiv2'>
        <Image
        src={props.eventImage}
        height='230px'
        width='350px'
        alt={props.eventImageDescription}
        />
      </div>
      <div className='eventTextContainer2'>
        <div className='eventNameTextContainerDiv2'>{props.eventName}</div>
        <div className='eventShortDescriptionContainerDiv2'>{props.eventShortDescription}</div>
        <div className='ReadMoreContainerDiv'><a href="">Read more</a></div> 
      </div>
      <button className='eventBtnAndArrowContainerDiv2'>
        <span className='applyNowSpan2'>Apply Now</span>
       <Image
       src='/vector.png'
       height='12px'
       width='16px'
       />
      </button>  
      </div>       
    </>
  )
}

export default EventCard
