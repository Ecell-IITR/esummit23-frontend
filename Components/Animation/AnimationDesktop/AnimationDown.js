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
      
    <p style={{display:"none"}}>Esummit IIT Roorkee is a platform that brings together the brightest minds in business, entrepreneurship, and technology to discuss and exchange ideas. This event is a Global Leadership Summit that aims to provide a platform for entrepreneurs, students, and professionals to interact with each other and learn from each other's experiences.

The Global Entrepreneurship Summit is a major highlight of the Esummit IIT Roorkee event. This summit brings together entrepreneurs from all over the world to discuss the latest trends and developments in entrepreneurship. The International Entrepreneurship Summit is a great opportunity for entrepreneurs to network and learn from the best in the business.

Summit International is an important event for students, professionals, and entrepreneurs. It provides a platform for people to network, learn, and grow in their respective fields. High school track events are a great way for students to showcase their skills and talents.

A Hackathon is a 24-hour coding competition where developers come together to create innovative software solutions. It is a great opportunity for students and developers to showcase their coding skills and work together to solve real-world problems. The virtual hackathon format has become increasingly popular due to the COVID-19 pandemic and offers a great opportunity for people to participate from the comfort of their own homes.

The Esummit IIT Roorkee event also features a community fest where attendees can come together and enjoy various activities, food, and entertainment. Tickets for the event are available online, and attendees can choose from a variety of ticket packages to suit their needs.

The Startup School is a great opportunity for entrepreneurs to learn from experienced business leaders and get valuable advice on how to start and grow a successful business. The Management Fest is a great opportunity for students and professionals to learn about the latest trends and developments in management and network with other like-minded individuals.

The e summit iitm, e cell iit roorkee, e summit iitb, and iit roorkee e summit are all events that aim to bring together the brightest minds in entrepreneurship, technology, and business. The iit roorkee login provides attendees with access to a wealth of resources and information about the event.

Peopleist India is an important platform for people to learn about the latest trends and developments in technology, entrepreneurship, and business. The iitr logo is a symbol of excellence and innovation, and represents the high standards of education and research at IIT Roorkee.

The iit bombay e cell summit and e summit iit bhu are similar events that aim to bring together entrepreneurs, students, and professionals to discuss and exchange ideas. These events provide a great opportunity for attendees to network, learn, and grow in their respective fields.

In conclusion, the Esummit IIT Roorkee is a great platform for entrepreneurs, students, and professionals to network, learn, and grow in their respective fields. With a variety of events and activities, attendees are sure to find something that appeals to them and provides valuable insights and experiences.

</p>

      <div className='containerAnimationDown'>
        <div className='upAnimationDown'>
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
