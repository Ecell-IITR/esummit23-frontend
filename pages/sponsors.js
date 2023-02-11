import React from 'react';
import Navbar from '../Components/Navbar/index';
import Footer from '../Components/Footer/Footer';
import sponsor from '../public/sponsorNPCI.png';
const SponsData = [
  {
    id: '1',
    sponsorImage: '/sponsorGRABON.jpg',
    SponsorType: 'Title Sponsor',
  },
  {
    id: '2',
    // sponsorImage:"",
    SponsorType: 'Title Sponsor',
  },
];

function sponsors() {
  return (
    <>
      <div className='sponsorContainer'>
        <Navbar />
        <div className='workspaceSponsor'>
          <div className='sponsorHeading'>E-Summit’23 Partners & Sponsors</div>
          <div className='sponsorDescription'>
            This year, we are excited to host a wide range of events and
            competitions to showcase the talents and ideas of students,
            entrepreneurs, and industry leaders from across the country.
          </div>

          <div className='sponsorImageandTypeSection'>
            <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img className='sponsorImageStatic' src='sponsorNPCI.png' />
              </div>
              <div className='sponsorType'>Title Sponsor</div>
            </div>

           
            


            <div className='sponsorBox'>
            <div className='sponsorImage'>
              <img
                className='sponsorImageStaticgrabon'
                src='sponsorIITRAA.png'
              />
            </div>
            <div className='sponsorType'>Associate Sponsor</div>
          </div>




          <div className='sponsorBox'>
            <div className='sponsorImage'>
              <img style={{width:"90%",height:"90%"}}
                className='sponsorImageStaticgrabon'
                src='sponsorIITRHF.png'
              />
            </div>
            <div className='sponsorType'>Associate Sponsor</div>
          </div>


          <div className='sponsorBox'>
          <div className='sponsorImage'>
            <img
              className='sponsorImageStaticgrabon'
              src='sponsorGRABON.jpg'
            />
          </div>
          <div className='sponsorType'>Savings Partner</div>
        </div>

          </div>

    

        </div>
        <Footer />
      </div>
    </>
  );
}

export default sponsors;
