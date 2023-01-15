import React from 'react';
import Image from 'next/image';

const FAQs = (props) => {
  return (
    <div className='FrequentlyAskedQuestions'>
      <div className='question'>{props.question}</div>
      <div className='addSignContainer'>
        <Image src='/Add.png' height='28px' width='28px' />
      </div>
    </div>
  );
};

export default FAQs;
