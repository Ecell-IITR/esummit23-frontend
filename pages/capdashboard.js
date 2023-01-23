import React from 'react';
import FetchApi from '../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../utils/MobileContext';
import { getAuthToken } from '../utils';
import { CAP_TASK_API, CAP_DASH_API } from '../utils/APIs';
import { getUserDetails } from '../utils';
import { isAuthenticated } from '../utils';
import { useRouter } from 'next/router';
import Leaderboard from '../Components/Leaderboard';
import {
  Personalinfo,
  PointScored,
  Task,
} from '../Components/dashboard/Dashboard';
import Mobprofiledetails, {
  Mobscore,
  Mobtask,
} from '../Components/dashboard/Mobdashboard';
// import { data } from 'jquery';

const capdashboard = () => {
  const [RenderId, setRenderId] = useState(0);
  const setMobile = useUpdateMobile();
  const [Taskname, setTaskname] = useState([]);
  const [TotalPoints, setTotalPoints] = useState([]);
  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [LeaderBoardData, setLeaderBoardData] = useState([]);
  const router = useRouter()
  useEffect(() => {
    if (!isAuthenticated()) {
      
      router.push(`/login`);
    }
    setMobile();
    const [name, id] = getUserDetails();
    setId(id);
    setName(name);
    setMobile();
    FetchApi('get', CAP_TASK_API, null, getAuthToken())
      .then((res) => {
        setTaskname(res.data.data);
        setTotalPoints(res.data.points);
      })
      .catch((err) => {});

    FetchApi('get', CAP_DASH_API, null, getAuthToken())
      .then((res) => {
        setLeaderBoardData(res.data.data);
      })
      .catch((err) => {});
  }, []);

  const View = () => {
    if (RenderId == 0) {
      if (useMobile().isMobile) {
        return (
          <div className='capTaskContainer'>   
              
            {Taskname.map((item,index) => {
               return (
                 <>              
                  <Mobtask
                   id={item?.task_id}                    
                   desc={item?.desc}
                   points={item?.points}
                      />
                    </>
                  );              
            })}
          </div>
        );
      } else {
        return (
          <div className='capTaskContainer'>
            {Taskname.map((item) => {
              return (
                <>
                  <Task
                    id={item?.task_id}
                    desc={item?.desc}
                    points={item?.points}
                  />
                </>
              );
            })}
          </div>
        );
      }
    } else if (RenderId == 1) {
      return (
        <>
                <Leaderboard
                data={LeaderBoardData}
                />
             
        </>
      );
    } else {
      return <>ikuiju</>;
    }
  };

  if (useMobile().isMobile) {
    return (
      <div style={{ display: 'flex' }}>
        <div className='mobContainer'>
          <Mobprofiledetails
            url='/Ellipse 40.png'
            name={Name} EsummitId={Id}
          />
          {TotalPoints.map((item) => {
            return (
              <>
                <Mobscore points={item?.points} rank={item?.rank} />

              </>
            );
          })}
          
          <div className='mobTaskbar'>
           
            <div 
            className={RenderId==1 ?"mobCapTask":"mobEventsCart"}
            style={{cursor:'pointer'}}
            onClick={() => {
              setRenderId(1);
            }}> CAP Leaderboard</div>
            <div 
            className={RenderId==0?"mobCapTask":"mobEventsCart"}
            style={{cursor:'pointer'}}
            onClick={() => {
              setRenderId(0);
            }}>CAP Tasks</div>
          </div>
          
<View/>

        </div>
      </div>
    );
  } else {
    return (
      <div className='mainContainer' style={{ display: 'flex' }}>
        <div className='capDashboardContainer'>
          <div className='profileContainer'>
            <Personalinfo url='/Ellipse 40.png' name={Name} EsummitId={Id} />
            {TotalPoints.map((item) => {
              return (
                <>
                  <PointScored points={item?.points} rank={item?.rank} />

                </>
              );
            })}
          </div>


          <div className='taskbarContainer'>
            
            <div
            className={RenderId==1 ?"capTask":"capLeaderBoard"}
            style={{cursor:'pointer'}}
              onClick={() => {setRenderId(1)}}
            >
              CAP Leaderboard
            </div>
            <div
            className={RenderId==0 ?"capTask":"capLeaderBoard"}
            style={{cursor:'pointer'}}
              onClick={() => {
                setRenderId(0);
              }}
            >
              CAP Task{' '}
            </div>
          </div>
        </div>
        <div className='bottomContainer'>
          <View />;
        </div>
      </div>
    );
  }
};

export default capdashboard;
