import React from 'react';

const SponsorCard = () => {
  return (
    <div>
      <div className='CardContainer'>
        <div className='CardBox1'></div>
        <div className='CardContent'>
          <div className='CardText'>
            <div className='CText1'>
              <img className='CardLine' src='leftline.svg' alt='noname ' />
              Sponsor
              <img className='CardLine' src='rightline.svg' alt='noname ' />
            </div>
          </div>
          <div className='SponsData'>
            <div className='SponsLogo'>
              <img src='sponlogo.svg' alt='noimg' />
            </div>
          </div>
        </div>
        <div className='CardBox2'></div>
      </div>
    </div>
  );
};

export default SponsorCard;
