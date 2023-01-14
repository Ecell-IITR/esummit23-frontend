import React from 'react';
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
import { useEffect } from 'react';
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import { display } from '@mui/system';
const capdashboard = () => {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
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

          <Mobtask
            TaskId='Task 1'
            Task='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magnam.'
          />
          <Mobtask
            TaskId='Task 2'
            Task='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magnam.'
          />
          <Mobtask
            TaskId='Task 3'
            Task='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magnam.'
          />
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
            <Task
              TaskId='Task 1'
              task='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, alias ad explicabo quod sit unde eligendi autem consectetur fugiat, possimus architecto optio. Non veritatis vero voluptate, amet aut at saepe!'
            />

            <Task
              TaskId='Task 2'
              task='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, alias ad explicabo quod sit unde eligendi autem consectetur fugiat, possimus architecto optio. Non veritatis vero voluptate, amet aut at saepe!'
            />
            <Task
              TaskId='Task 3'
              task='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, alias ad explicabo quod sit unde eligendi autem consectetur fugiat, possimus architecto optio. Non veritatis vero voluptate, amet aut at saepe!'
            />
          </div>
        </div>
      </div>
    );
  }
};
export default capdashboard;
