import React from 'react';
import Image from 'next/image';



const Personalinfo = (props) => {
  return (
    <>
      <Image
        className='ProfileImage'
        src={props.url}
        height='150px'
        width='150px'
      />
      <div className='personalInfoContainer'>
        <div className='fullNameContainer'>{props.full_name}</div>
        <div className='esummitIdContainer'>Esummit ID - {props.EsummitId}</div>
        <div className='fullProfileContainer'>
          <div>View full profile</div>
          <div style={{ width: '24px', height: '24px', marginLeft: '12px' }}>
            <Image src='/checkmark.webp' height={24} width={24} />
          </div>
        </div>
      </div>
    </>
  );
};
const PointScored = (props) => {

  return (
    <>
      <div className='pointContainer'>
        <div className='pointScored'>
          <div className='pointScoredTop'>{props.points}</div>

          <div className='pointScoredBottom'>
            <div style={{ height: '33px', width: '146px' }}>Points Scored</div>

            <Image src='/Info_circle.png' height={18} width={18} />
          </div>
        </div>

        <div className='netPoints'>
          <div className='pointScoredTop'>{props.rank}</div>
          <div className='pointScoredBottom' style={{ width: '92px' }}>
            <div style={{ height: '33px', width: '66px' }}>Rank</div>
            <Image src='/Info_circle.png' height={18} width={18} />
          </div>
        </div>
      </div>
    </>
  );
};

const Task = (props) => {

  
  return (<>
    <div className='taskContainer'>
      <div className='taskId'> Task {props?.id}</div>
      <div className='taskTextContainer'>
        <div className='taskText'>{props?.desc}</div>
        <div>
          <button type='submit' 
          onClick={() => { setShow(true);}}
          
            className='submitTask'>
            Submit your Task
          </button>
        </div>
      </div>
    </div>
    </> )
};
const Taskbar = () => {
  return (
    <>
      <div className='taskbarContainer'>
        <div className='eventsCart'>Events Cart</div>
        <div className='capLeaderBoard'> CAP Leaderboard</div>
        <div className='capTask'>CAP Task </div>
      </div>
    </>
  );
};

export { Personalinfo, PointScored, Task, Taskbar };
