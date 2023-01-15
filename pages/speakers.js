import React from 'react'
import FAQs from '../Components/speakers/FAQs'

const Speakers = () => {
  return (
    <div className='speakersContainer'>
    <div className='faqContainer'>
        <div className='faqHeading'>FAQ</div>
        <div className='questionContainer'>
        < FAQs question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, suscipit.' />
        < FAQs question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, suscipit.' />
        < FAQs question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, suscipit.' />
        < FAQs question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, suscipit.' />
        < FAQs question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, suscipit.' />
        </div>
      
    </div>
    </div>
  )
}

export default Speakers
