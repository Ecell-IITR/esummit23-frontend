import React from 'react';
import FetchApi from '../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import {  getAuthToken } from '../utils';
import { CAP_TASK_API } from '../utils/APIs';
import {
  Personalinfo,
  PointScored,
  Task,
  Taskbar,
} from '../Components/dashboard/Dashboard';
import Mobprofiledetails, {
  Mobscore,
  Mobtaskbar,
  Mobtask,
} from '../Components/dashboard/Mobdashboard';


const capdashboard = () => {
   
  const [Taskname, setTaskname] = useState([]);
  

  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  FetchApi('get',CAP_TASK_API, null, getAuthToken())
    .then((res) => {
      console.log(res)
      setTaskname(res.data.data);
    })
    .catch((err) => {
      console.log(err)      
    });

  }, []);

  

  if (useMobile().isMobile) {
    return (
      <div style={{ display: 'flex' }}>
        <div className='mobContainer'>
          <Mobprofiledetails
            url='/Ellipse 40.png'
            name='Abhdfg xyz'
            EsummitId='RTTEUVF32'
          />
          <Mobscore Rank='6' Points='245' />
          <Mobtaskbar />
          {Taskname.map((item) => {

            return(<>
          <Mobtask
          id = {item.task_id}
          task={item.desc}
            
          />
          
          </>)
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex' }}>
        <div className='capDashboardContainer'>
          <div className='profileContainer'>
            <Personalinfo
              url='/Ellipse 40.png'
              name='Abcd Xyz'
              EsummitId='EERRTTYY1'
            />
            <PointScored PointsScored='216' NetPoints='216' />
          </div>
          <Taskbar />
          <div className='capTaskContainer'>
          {Taskname.map((item) => {
            return(<>
             <Task
              id = {item.task_id}
              desc={item.desc}
             />

            
            
            </>)})}
          </div>
        </div>
      </div>
    );
  }
};
export default capdashboard;
