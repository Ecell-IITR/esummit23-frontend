import React from 'react';
import Navbar from '../Components/Navbar/index';
import Footer from '../Components/Footer/Footer';
import sponsor from '../public/sponsorNPCI.png';
import { useRouter } from 'next/router';
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
  const router = useRouter();
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



          <div className="titleSponsor">
             <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img className='sponsorImageStatic' src='sponsorNPCI.png' />
              </div>
              <div className='sponsorType'>Title Sponsor</div>
             </div>
          </div>



          <div className='associateSponsor'>

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

          </div>



          <div className='patronage'>
          <div className='sponsorBox'>
          <div className='sponsorImage'>
            <img
            className='sponsorImageStaticgrabon'
            src='patronageG20.png'
            />
          </div>
        <div className='sponsorType'>Patronage</div>
      </div>


      <div className='sponsorBox'>
          <div className='sponsorImage'>
            <img
            className='sponsorImageStaticgrabon'
            src='patronageMDI.png'
            />
          </div>
        <div className='sponsorType'>Patronage</div>
      </div>
      <div className='sponsorBox'>
          <div className='sponsorImage'>
            <img
            className='sponsorImageStaticgrabon'
            src='patronageSTI.png'
            />
          </div>
        <div className='sponsorType'>Patronage</div>
      </div>

      <div className='sponsorBox'>
          <div className='sponsorImage'>
            <img
            className='sponsorImageStaticgrabon'
            src='patronageSU.png'
            />
          </div>
        <div className='sponsorType'>Patronage</div>
      </div>

      <div className='sponsorBox'>
          <div className='sponsorImage'>
            <img
            className='sponsorImageStaticgrabon'
            src='patronageUNESCO.png'
            />
          </div>
        <div className='sponsorType'>Patronage</div>
      </div>
          
          </div>


          <div className='otherSponsors' >
            <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorGRABON.jpg'
                />
              </div>
            <div className='sponsorType'>Savings Partner</div>
          </div>

          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorUnstop.jpeg'
                />
              </div>
            <div className='sponsorType'>Hosting Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorRedseer.jpeg'
                />
              </div>
            <div className='sponsorType'>Knowledge Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorProductfolks.jpeg'
                />
              </div>
            <div className='sponsorType'>Event Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorMba.jpeg'
                />
              </div>
            <div className='sponsorType'>Business Education Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorIvygrowth.jpeg'
                />
              </div>
            <div className='sponsorType'>Acceleration Partner</div>
          </div>

          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorInterviewbuddy.jpeg'
                />
              </div>
            <div className='sponsorType'>Preparation Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorEntrepreneurinida.jpeg'
                />
              </div>
            <div className='sponsorType'>Media Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorElearnMarkets.jpeg'
                />
              </div>
            <div className='sponsorType'>Event Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorCodingal.jpeg'
                />
              </div>
            <div className='sponsorType'>Event Partner</div>
          </div>
          {/*
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorCashify.jpeg'
                />
              </div>
            <div className='sponsorType'>Savings Partner</div>
          </div>
          */}

          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorBurgeonlaw.jpeg'
                />
              </div>
            <div className='sponsorType'>Legal Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorBuilderstribe.jpeg'
                />
              </div>
            <div className='sponsorType'>Web3.0 Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorStockgrow.jpeg'
                />
              </div>
            <div className='sponsorType'>Event Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorPrintbrix.png'
                />
              </div>
            <div className='sponsorType'>Merchandise Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorLog9.png'
                />
              </div>
            <div className='sponsorType'>Event Partner</div>
          </div>

          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorCI.png'
                />
              </div>
            <div className='sponsorType'>Event Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorBL.png'
                />
              </div>
            <div className='sponsorType'>Legal Partner</div>
          </div>
          <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img
                className='sponsorImageStaticgrabon'
                src='sponsorAbhibus.png'
                />
              </div>
            <div className='sponsorType'>Mobility Partner</div>
          </div>
         
          </div>
          

{/*
            <div className='sponsorBox'>
              <div className='sponsorImage'>
                <img className='sponsorImageStatic' src='sponsorNPCI.png' />
              </div>
              <div className='sponsorType'>Title Sponsor</div>
            </div>

           
            


            <div className='sponsorBox'>
            <div className='sponsorImage'>
              <img
                onClick={() => router.push('http://www.iitraa.in/')}
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
                onClick={() => router.push('http://www.IITRHF.org')}
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
      */}

          </div>

    

        </div>
        <Footer />
      </div>
    </>
  );
}

export default sponsors;
