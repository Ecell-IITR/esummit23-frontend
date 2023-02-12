import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Animation() {
  const router=useRouter();
  return (
    <div>
      <h1 style={{ display: 'none' }}>E-CELL IIT ROORKEE</h1>
      <h2 style={{ display: 'none' }}>E-CELL IIT ROORKEE</h2>
      <h3 style={{ display: 'none' }}>E-CELL IIT ROORKEE</h3>
      <a href='#' style={{ display: 'none' }}></a>
      {/*
    <p style={{display:"none"}}>E-Summit IIT Roorkee: A Journey towards Success and Innovation

E-Summit IIT Roorkee is a two-day extravaganza that showcases the latest advancements in technology, entrepreneurship, and innovation. The event provides a platform for students, entrepreneurs, and industry experts to come together and discuss various issues related to the current state of technology and how it can be leveraged to drive progress.

Over the years, the E-Summit IIT Roorkee has become one of the most sought-after events in the field of entrepreneurship and innovation. With its focus on fostering innovation and entrepreneurship, the E-Summit provides students with a unique opportunity to learn from the experiences of successful entrepreneurs and leaders in the industry.

The E-Summit IIT Roorkee is designed to provide students with a comprehensive understanding of entrepreneurship and innovation. The event features a range of keynote speeches, panel discussions, and interactive sessions that explore the latest trends and challenges in the field.

One of the key highlights of the E-Summit IIT Roorkee is its lineup of keynote speakers. The speakers are some of the most influential and successful entrepreneurs in the industry, and they bring with them a wealth of knowledge and experience that can help students better understand the complexities of entrepreneurship and innovation.

Another key aspect of the E-Summit IIT Roorkee is its focus on hands-on learning. The event features a range of interactive workshops, hackathons, and coding challenges that allow students to put their skills to the test. These hands-on sessions provide students with a unique opportunity to apply their knowledge and gain practical experience in real-world situations.

The E-Summit IIT Roorkee also provides students with a valuable networking opportunity. With its focus on entrepreneurship and innovation, the event attracts a wide range of entrepreneurs, investors, and industry experts, giving students the chance to connect with the people who can help them achieve their goals.

The E-Summit IIT Roorkee is a perfect platform for students who are passionate about entrepreneurship and innovation. Whether they are just starting out on their entrepreneurial journey or they are well on their way, the E-Summit provides a wealth of resources and support that can help them achieve their goals.

The E-Summit IIT Roorkee also provides students with a unique opportunity to showcase their skills and innovations. With its focus on entrepreneurship and innovation, the event provides students with a platform to showcase their projects and ideas, and to connect with potential investors and customers.

For students who are serious about pursuing a career in entrepreneurship and innovation, the E-Summit IIT Roorkee is a must-attend event. The event provides students with a comprehensive understanding of the latest trends and challenges in the field, as well as the practical knowledge and skills they need to succeed.

In conclusion, the E-Summit IIT Roorkee is a journey towards success and innovation. With its focus on entrepreneurship and innovation, the event provides students with a platform to learn from the best in the industry, to connect with potential investors and customers, and to showcase their skills and innovations. Whether you are just starting out on your entrepreneurial journey or you are well on your way, the E-Summit IIT Roorkee is the perfect platform to help you achieve your goals and reach your full potential.



</p>*/}

      <div className='containerAnimationDown'>
        <div className='upAnimationDown'>
        <div className='titleSponsorFrontPage'><img src="frontpageNPCI.png" style={{width:"100%",height:"100%"}}></img></div>
        <div  className='dates' >17th-19th FEB</div>
        <div className='mainSummitImage'>
          <img
            style={{ width: '70vw' }}
            className='landingImage'
            src='Landing.png'
            alt='landingImage'
          />
          </div>
          <div className='button2' onClick={()=>{router.push('tickets/tickets')}} >Buy Tickets Now</div>
        </div>
      </div>


    </div>
  );
}

export default Animation;
