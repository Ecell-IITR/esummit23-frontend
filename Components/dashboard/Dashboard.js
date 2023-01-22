import React from 'react';
import Image from 'next/image';
import { getUserDetails} from '../../utils';
import { useState,useEffect } from 'react';
import Upload from './upload_popup';


const Personalinfo = (props) => {
  return (
    <>
      
        <div className='profileImage'>{props.name[0]}</div>
      
     
      <div className='personalInfoContainer'>
        <div className='fullNameContainer'>{props.name}</div>
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
  const[Id, setId]=useState();
  const[Name,setName]=useState();
  const[Show, setShow]=useState(false);
  useEffect(() => {
    const [name,id] = getUserDetails();
    setId(id)
    setName(name)
  }),[]

  
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
    </> )
};



export { Personalinfo, PointScored, Task };
