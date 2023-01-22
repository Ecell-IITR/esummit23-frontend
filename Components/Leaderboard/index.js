import React, { useState, useEffect } from 'react';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';


const Leaderboard = (props) => {
 console.log(props)
  const setMobile = useUpdateMobile();
  useEffect(() => {
    setMobile();
   
  }, []);
  if (useMobile().isMobile) {
     return (<>
      <div className='leaderBox'>
        <div className='leaderBoardTop'>
          <div style={{ width: '3.16vw', paddingRight: '20px' }}>Rank</div>
          <div style={{ width: '17.007vw' }}>Name</div>
          <div style={{ width: '17.007vw' }}>College</div>
          <div style={{ width: '17.007vw' }}>Tasks C..</div>
          <div style={{ width: '9.019vw' }}>Points..</div>
        </div>

        <div className='leaderBoardBottom'>
        
            return (
              <div className='leaderBoardParent' >
               {props.data.map((item,index)=>{
                return(<div className='leaderBoard'>
                 <div style={{ width: '3.16vw' }} className='leaderBoardRank'>
                  {item.rank}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardName'>
                  {item.full_name}
                </div>
                <div
                  style={{ width: '17.007vw' }}
                  className='leaderBoardCollege'
                >
                  {item.collage.length > 10
                    ?item.collage.substring(0, 10) + '..'
                    : item.collage}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardTc'>
                  {item.noOftaskCompleted}
                </div>
                <div style={{ width: '9.019vw' }} className='leaderBoardPs'>
                  {item.points}
                </div>
               </div> )})}
                
                </div>
            );
          
        </div>
      </div>
   </> );
  } else {
    return (<>
      <div className='leaderBox'>
        <div className='leaderBoardTop'>
          <div style={{ width: '3.16vw', paddingRight: '20px' }}>Rank</div>
          <div style={{ width: '17.007vw' }}>Name</div>
          <div style={{ width: '17.007vw' }}>College</div>
          <div style={{ width: '17.007vw' }}>Tasks Completed</div>
          <div style={{ width: '9.019vw' }}>Points Scored</div>
        </div>

        <div className='leaderBoardBottom'>
          
              <div  className="leaderBoardParent">
              {props.data.map((item,index)=>{
                return(<div className='leaderBoard'>
                  
                <div style={{ width: '3.16vw' }} className='leaderBoardRank'>
                  {item.rank}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardName'>
                  {item.full_name}
                </div>
                <div
                  style={{ width: '17.007vw' }}
                  className='leaderBoardCollege'
                >
                  {item.collage}
                </div>
                <div style={{ width: '17.007vw' }} className='leaderBoardTc'>
                  {item.noOftaskCompleted}
                </div>
                <div style={{ width: '9.019vw' }} className='leaderBoardPs'>
                  {item.points}
                </div>
                </div> )  })}
              </div>
            );
         
        </div>
      </div>
      </>
    );
  }
};

export default Leaderboard;
