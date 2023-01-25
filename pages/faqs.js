import React from 'react';
import FAQs from '../Components/speakers/FAQs';

const Speakers = (props) => {
  // const {Questions} = props;
  return (
    <div className='speakersContainer'>
      <div className='faqContainer'>
        <div className='faqHeading'>FAQ</div>
        <div className='questionContainer'>
          <FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' />
          <FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' />
          <FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' />
          <FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' />
          <FAQs Question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos!' />
          {/* {Questions.map( (Question) => ( < FAQs Key={Question.Key} question={Question.Key} />) )}   */}
        </div>
      </div>
    </div>
  );
};
// export async function getStaticProps() {
// const res = await axios.get('');
// const Data = res.data;
//   return {
//     props: {
//       Questions: [
//         {id: '1', Questions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur.' },
//         {id: '2', Questions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur.'},
//         {id: '3', Questions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur.'}

//       ]
//   }
//   };
// }

export default Speakers;
