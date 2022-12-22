import React from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Register from '../components/Register';
function Dashboard() {
    const arr=[{
        name:'Ideastorm',
        desc: "Annual B-Plan competition which witnesses more than 500 entries from over the country",
        image:"/Ideastorm.webp",
        isRegistered:1
    },{
        name:'Pthon',
        desc: "Annual B-Plan competition which witnesses more than 500 entries from over the country",
        image:"/Ideastorm.webp",
        isRegistered:0
    }]
  return (
    <div className='dashboardContainer'>
      <div className='dashboardSubContainer'>
        <div className='dashboardContainerHeader'>
          <ProfileCard name='Pranav Arya' esummit_id='ES23CAP039' />
          <div></div>
        </div>
        <div className='dashboardEventRegisteredContainer'>
            {arr.map((item)=>{ 
                return <Register isRegistered={item.isRegistered} img={item.image} name={item.name} desc={item.desc}/>
            })}
            
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
