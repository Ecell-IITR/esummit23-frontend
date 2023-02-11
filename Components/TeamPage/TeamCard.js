import React,{useState} from 'react';
import TeamCardData from './TeamCardData';
import Navbar from '../Navbar';
import FetchApi from '../../utils/fetchAPI';
import { TEAM_API } from '../../utils/APIs';
const TeamCard = () => {

    const [TeamData,setTeamData] = useState([]);

    FetchApi('get',TEAM_API,null,null)
    .then((res) => {
        setTeamData(res.data.data);
      })
      .catch((err) => {});
  return (
    <>
      <div className='teamCardPage'>
    <Navbar/>
        <div className='teamCardPageHeading'>Team E-Summit’23</div>
        <div className='teamCardPageDescription'>
          This year, we are excited to host a wide range of events and
          competitions to showcase the talents and ideas of students,
          entrepreneurs, and industry leaders from across the country.
        </div>
        <div style={{display:"flex" ,justifyContent:"center",gap:"93px",flexWrap:"wrap"}}>
          {TeamData.map((current, index) => {
            return (
              <div className='teamCardBox'>
                <img src={current.Img} />
                <div className='teamCardDescription'>
                  <div className='teamCardDescriptionName'>{current.name}</div>
                  <div className='teamCardDescriptionPost'>{current.Post}</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <img src='/facebook.png' />
                    <img src='/Twitter.png' />
                    <img src='/Instagram.png' />
                    <img src='/LinkedIN.png' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
