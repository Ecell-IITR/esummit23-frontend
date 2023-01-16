import React from 'react';
import Image from 'next/image';

const Mobprofiledetails = (props) => {
  return (
    <div className='mobProfileContainer'>
      <Image src={props.url} width={100} height={100} />
      <div className='profileInfo'>
        <div className='mobFullNameContainer'>{props.name}</div>
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
          <div className='rankContainer'>{props.Rank}</div>
          <div className='currentRankContainer'>
            <div style={{ marginRight: '8px' }}>Current rank</div>
            <Image src='/Info_circle.png' height={16} width={16} />
          </div>
        </div>
        <div className='mobPointsContainer'>
          <div className='pointsContainer'>{props.Points}</div>
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
const Mobtaskbar = () => {
  return (
    <>
      <div className='mobTaskbar'>
        <div className='mobEventsCart'>Events Cart</div>
        <div className='mobCapLeaderboard'> CAP Leaderboard</div>
        <div className='mobCapTask'>CAP Tasks</div>
      </div>
    </>
  );
};
const Mobtask = (props) => {
  return (
    <>
      <div className='mobAllTaskcontainer'>
        <div className='mobTaskId'>{props.TaskId}</div>
        <div className='mobTaskContainer'>
          <div className='task'>{props.Task}</div>
          <button className='mobTaskSubmitButton'>Submit your task</button>
        </div>
      </div>
    </>
  );
};
export { Mobscore, Mobtaskbar, Mobtask };

export default Mobprofiledetails;
