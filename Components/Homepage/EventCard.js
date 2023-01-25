import React from 'react'
import Image from 'next/image';


const EventCard = (props) => {
  const [name, setName] = useState('');

  const [show, setShow] = useState(false);
  const [No, setNo] = useState(0);
  const [question1, setquestion1] = useState('');
  const [question2, setquestion2] = useState('');
  const handleClose = () => setShow(false);
  const router = useRouter();

  const GetData = (name) => {
    FetchApi('POST', SINGLE_SERVICES, { service_name: name }, null)
      .then((res) => {
        setName(res.data.name);
        setquestion1(res.data.question1);
        setquestion2(res.data.question2);
        setNo(res.data.no_of_QA);
      })
      .catch((err) => {});
  };

  const rederict = () => {
    if (isAuthenticated()) {
      router.push(`/dashboard`);
    } else {
      router.push(`/login`);
    }
  };
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const rotation = window.innerWidth;
    setWidth(rotation);
  });

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
        <div className='eventShortDescriptionContainerDiv2'  dangerouslySetInnerHTML={{ __html: props.card_Description }} ></div>
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
