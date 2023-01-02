import React ,{useEffect,useState} from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Register from '../components/Register';
import {getUserDetails} from '../utils';
function Dashboard() {
  const arr = [
    {
      name: 'Ideastorm',
      desc: 'Annual B-Plan competition which witnesses more than 500 entries from over the country',
      image: '/Ideastorm.webp',
      isRegistered: 1,
    },
    {
      name: 'Pthon',
      desc: 'Annual B-Plan competition which witnesses more than 500 entries from over the country',
      image: '/Ideastorm.webp',
      isRegistered: 0,
    },
  ];

  const [name, setName] = useState("");
  const [Id, setId] = useState("");
  useEffect(() => {
  
    const [first, second] = getUserDetails();
    setName(first);
    setId(second);
  }, )
  

  
  
  return (
    <div className='dashboardContainer'>
      <div className='dashboardSubContainer'>
        <div className='dashboardContainerHeader'>
          <ProfileCard name={name} esummit_id={Id} />
          <div></div>
        </div>
        <div className='dashboardEventContainer'>
            <div className='dashboardEventHeader'>Events Registered</div>
          <div className='dashboardEventCardsContainer'>
            {arr.map((item) => {
              return (
                <Register
                  IsRegistered={item.isRegistered}
                  img={item.image}
                  name={item.name}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
        <div className='dashboardEventContainer'>
            <div className='dashboardEventHeader'>Events Available</div>
          <div className='dashboardEventCardsContainer'>
            {arr.map((item) => {
              return (<>
              <div className='dashboardRegisterBox'>
                <Register
                  isRegistered={item.isRegistered}
                  img={item.image}
                  name={item.name}
                  desc={item.desc}
                />
                <div className='dashboardRegisterButton' >Register</div>
                </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
