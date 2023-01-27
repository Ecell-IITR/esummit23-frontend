import React from 'react'
import FAQs from '../Components/speakers/FAQs'

const Speakers = (props) => {
  return (
    <div className='speakersContainer'>
    <div className='faqContainer'>
        <div className='faqHeading'>FAQ</div>
        <div className='questionContainer'>
        < FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' /> 
        < FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' /> 
        < FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' /> 
        < FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' /> 
        < FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' /> 
        </div>
      
    </div>
    </div>
  )
}

export default Speakers
