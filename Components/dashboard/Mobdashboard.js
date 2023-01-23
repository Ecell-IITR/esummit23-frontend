import React from 'react';
import Image from 'next/image';
import { getUserDetails} from '../../utils';
import { useState,useEffect } from 'react';
import Upload from './upload_popup';

const Mobprofiledetails = (props) => {
  return (
    <div className='mobProfileContainer'>
    <div className='profileImage'>{props.name[0]}</div>
      <div className='profileInfo'>
        <div className='mobFullNameContainer'>{props?.name}</div>
        <div className='mobEsummitIdContainer'>
          {' '}
          Esummit ID -{props.EsummitId}
        </div>
        <div className='mobViewFullProfileContainer'>
          <div>View full profile</div>
          <div style={{ width: '24px', height: '24px', marginLeft: '12px' }}>
            <Image src='/checkmark.webp' height={24} width={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Mobscore = (props) => {
  return (
    <>
      <div className='mobScoreContainer'>
        <div className='mobRankContainer'>
          <div className='rankContainer'>{props?.rank}</div>
          <div className='currentRankContainer'>
            <div style={{ marginRight: '8px' }}>Current rank</div>
            <Image src='/Info_circle.png' height={16} width={16} />
          </div>
        </div>
        <div className='mobPointsContainer'>
          <div className='pointsContainer'>{props?.points}</div>
          <div className='mobPointsScoredContainer'>
            <div style={{ marginRight: '8px', height: '21px', width: '107px' }}>
              Points Scored
            </div>
            <Image src='/Info_circle.png' height={16} width={16} />
          </div>
        </div>
      </div>
    </>
  );
};

const Mobtask = (props) => {
  const[Id, setId]=useState();
  const[Name,setName]=useState();
  const[Show, setShow]=useState(false);
  useEffect(() => {
    const [name,id] = getUserDetails();
    setId(id)
    setName(name)
  }),[]
  return (
    <>
      <div className='mobAllTaskcontainer'>
        <div className='mobTaskId'>Task {props.id}</div>
       
        <div className='mobTaskContainer'>
          <div className='task'>{props.desc}</div>
          
          <button type='submit' 
          onClick={() => { setShow(true);}}
          className='mobTaskSubmitButton'>Submit your task</button>
        </div>
        <Upload
        esummitId={Id}
        taskid={props?.id}
        show={Show}
        points={props.points}
        setShow={(e) => {
          setShow(e);
        }}
      />
      </div>
    </>
  );
};
export { Mobscore, Mobtask };

export default Mobprofiledetails;
