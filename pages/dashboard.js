import React from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Register from '../components/Register';
function Dashboard() {
    const arr=[{
        name:'Ideastorm',
        desc: "Annual B-Plan competition which witnesses more than 500 entries from over the country",
        image:"Ideastorm.webp"
    },{
        name:'Ideastorm',
        desc: "Annual B-Plan competition which witnesses more than 500 entries from over the country",
        image:"Ideastorm.webp"
    }]
  return (
    <div className='dashboardContainer'>
      <div className='dashboardSubContainer'>
        <div className='dashboardContainerHeader'>
          <ProfileCard name='Pranav Arya' esummit_id='ES23CAP039' />
          <div></div>
        </div>
        <div className='dashboardEventRegisteredContainer'>
            <Register img="/Ideastorm.webp"/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
