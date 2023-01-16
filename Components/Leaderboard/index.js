import React, { useState, useEffect } from 'react';
import LeaderBoardData from './LeaderBoardData';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

const Leaderboard = () => {
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
    return (
      <div className='leaderBox'>
        <div className='leaderBoardTop'>
          <div style={{ width: '3.16vw', paddingRight: '20px' }}>Rank</div>
          <div style={{ width: '17.007vw' }}>Name</div>
          <div style={{ width: '17.007vw' }}>College</div>
          <div style={{ width: '17.007vw' }}>Tasks C..</div>
          <div style={{ width: '9.019vw' }}>Points..</div>
        </div>

        <div className='leaderBoardBottom'>
          {LeaderBoardData.map((current, index) => {
            return (
              <div className='leaderBoard' key={index}>
                <div style={{ width: '3.16vw' }} className='leaderBoardRank'>
                  {current.Rank}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardName'>
                  {current.Name}
                </div>
                <div
                  style={{ width: '17.007vw' }}
                  className='leaderBoardCollege'
                >
                  {current.College.length > 10
                    ? current.College.substring(0, 10) + '..'
                    : current.College}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardTc'>
                  {current.Tasks_Completed}
                </div>
                <div style={{ width: '9.019vw' }} className='leaderBoardPs'>
                  {current.Points_Scored}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className='leaderBox'>
        <div className='leaderBoardTop'>
          <div style={{ width: '3.16vw', paddingRight: '20px' }}>Rank</div>
          <div style={{ width: '17.007vw' }}>Name</div>
          <div style={{ width: '17.007vw' }}>College</div>
          <div style={{ width: '17.007vw' }}>Tasks Completed</div>
          <div style={{ width: '9.019vw' }}>Points Scored</div>
        </div>

        <div className='leaderBoardBottom'>
          {LeaderBoardData.map((current, index) => {
            return (
              <div className='leaderBoard' key={index}>
                <div style={{ width: '3.16vw' }} className='leaderBoardRank'>
                  {current.Rank}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardName'>
                  {current.Name}
                </div>
                <div
                  style={{ width: '17.007vw' }}
                  className='leaderBoardCollege'
                >
                  {current.College}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardTc'>
                  {current.Tasks_Completed}
                </div>
                <div style={{ width: '9.019vw' }} className='leaderBoardPs'>
                  {current.Points_Scored}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Leaderboard;
