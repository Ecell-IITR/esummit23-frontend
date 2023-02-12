import React,{useState,useEffect} from 'react';
import TeamCardData from './TeamCardData';
import Navbar from '../Navbar';
import FetchApi from '../../utils/fetchAPI';
import { TEAM_API } from '../../utils/APIs';
const TeamCard = () => {

    const [TeamData,setTeamData] = useState([]);
     useEffect(() => {
       FetchApi('get',TEAM_API,null,null)
       .then((res) => {
        console.log(res.data)
           setTeamData(res.data);
         })
         .catch((err) => {});
     }, [])
     
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
          {TeamData?.map((current, index) => {
            return (
              <>
              <div className='teamCardBox'>
                <img src={current.profile_image} width="258px" height="322px"/>
                <div className='teamCardDescription'>
                  <img className='blackShade' src="/blackshade.png"/>
                  <div className='teamCardDescription1'>
                  <div className='teamCardDescriptionName'>{current.name}</div>
                  <div className='teamCardDescriptionPost'>{current.designation}</div>
                  <div className='teamCardBoxSocialMedia'>
                    <a href={current.team_facebook}>
                    <img src='/facebook.png' />
                    </a>

                    <a href={current.team_twitter}>
                    <img src='/Twitter.png' />
                    </a>
                     <a href={current.team_instagram}>
                    <img src='/Instagram.png' />
                      </a>
                    <a href={current.team_linkedin}>
                    <img src='/LinkedIN.png' />
                    </a>

                  </div>
                  </div>
                </div>
              </div>
                {/* <div className='fadeUpBox1'/> */}
                {/* <div className='fadeUpBox2'/> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
