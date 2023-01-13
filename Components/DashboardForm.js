import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import FetchApi from '../utils/fetchAPI';
import { TEAM_REGISTER_API } from '../utils/APIs';
import { getAuthToken } from '../utils';



function Dashboard(props) {
  const [inputFields, setInputFields] = useState([]);
  const [TeamName, setTeamName] = useState('');
  const [Ans1, setAns1] = useState('');
  const [Ans2, setAns2] = useState('');
  const [Email,setEmail] = useState('');
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { full_name: '', email: '', phone_number: '' };
    if(inputFields.length<4){
    setInputFields([...inputFields, newfield]);
    }
    else{
      toast.error('only 5 members allowed')
    }
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const emailRegex = /\S+@\S+\.\S+/;
  const mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(TeamName==""){
      toast.error('please enter valid Team Name!')
      return;
    }
    for(const [i,inputField] of inputFields.entries()){
   
      if(inputField.full_name==""){
       toast.error('please enter valid name!')
       return;
      }
 }
 for(const [i,inputField] of inputFields.entries()){
  if(!inputField.email.match(emailRegex)){
     toast.error('please enter valid email!')
     return;
  }
 }
 for(const [i,inputField] of inputFields.entries()){
  if(!inputField.phone_number.match(mobileRegex)){
     toast.error('please enter valid mobile number!')
     return;
  }
 }
 if(props.noQuestions==1){
       if(Ans1==""){
        toast.error('please enter an answer')
        return;
       }
 }else if(props.noQuestions==2){
  if(Ans1==""){
    toast.error('please enter an answer')
    return;
   }
   if(Ans2==""){
    toast.error('please enter an answer')
    return;
   }
 }

    const data = {
      no_user: inputFields.length,
      team_name: TeamName,
      users: inputFields,
      event: props.name,
      submission_text: Ans1 + '<br>' + Ans2,
    };
  

    FetchApi('POST', TEAM_REGISTER_API, data, getAuthToken())
      .then((res) => {
        toast.success('Team Registered!');
        props.handleClose()

      })
      .catch((err) => {
        toast.error('Please check the details!');
   
      });
  };
  return (
    <div className='container_GRF'>
      <div className='formHeading_GRF'>
        Application Form - {props.name.toUpperCase()} Round 1
      </div>

      <div className='teamName_GRF'>
        <input
          className='inputForm'
          type='text'
          name='teamName'
          value={TeamName}
          placeholder='Team Name'
          onChange={(event) => setTeamName(event.target.value)}
        />
      </div>
      <div className='formHeading_GRF'> Add rest of your teammates</div>
      {inputFields.map((input, index) => {
        return (
          <div className='detailsMember_GRF' key={index}>
            <div className='memberNumber_GRF'>Member {index + 1}</div>
            <div className='otherDetailsMember_GRF'>
              <div className='detailsOfMembers_GFR'>
                <div className='commonDetail_GRF fullName_GRF'>
                  <input
                    name='full_name'
                    className='commonInput_GRF'
                    type='text'
                    placeholder='Full Name'
                    value={input.full_name}
                    onChange={(event) => handleFormChange(index, event)}
                  ></input>
                </div>
                <div className='commonDetail_GRF email_GRF'>
                  <input
                    className='commonInput_GRF'
                    type='email'
                    name='email'
                    value={input.email}
                    placeholder='Email Address'
                    onChange={(event) =>{
                       handleFormChange(index, event);
                       setEmail(event.target.value);
                    }}
                  ></input>
                </div>
                <div className='commonDetail_GRF mobNo_GRF'>
                  <input
                    name='phone_number'
                    className='commonInput_GRF'
                    type='phoneNo'
                    placeholder='Mobile No.'
                    value={input.phone_number}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </div>
                <img src="/Delete.png" onClick={()=>{removeFields(index)}} />
                {/* <div className='commonDetail_GRF gender_GRF'>
                  <input
                    className='commonInput_GRF'
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    
                    onChange={(event) => setGender(event.target.value)}
                  />
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
      <div style={{width:"20rem",cursor: "pointer"
}}>
        <div className='addMember_GRF'>
          <div className='addMemberOption_GRF'>
            <div className='addSymbol_GRF' onClick={addFields}>
              <Image
                className='addImage'
                src='/add.webp'
                width='22rem'
                height='9rem'
              ></Image>
            </div>
            <div className='afterAddSymbol_GRF' onClick={addFields}>
              Add Member
            </div>
          </div>
        </div>
        
      </div>
      <div className='questionBigContainer_GRF'>
        {props.noQuestions > 0 ? (
          <div>
            <div className='questionSmallContainer_GRF'>Q1. {props.Q_1}</div>
            <div className='answerHere_GRF'>
              <input
                className='commonInput_GRF commonInput_GRF2'
                type='text'
                placeholder='Answer Here'
                value={Ans1}
                onChange={(event) => setAns1(event.target.value)}
              ></input>
            </div>
          </div>
        ) : (
          <></>
        )}
        {props.noQuestions > 1 ? (
          <div>
            <div className='questionSmallContainer_GRF '>Q2. {props.Q_2}</div>
            <div className='answerHere_GRF'>
              <input
                className='commonInput_GRF commonInput_GRF2'
                type='paragraph'
                placeholder='Answer Here'
                value={Ans2}
                onChange={(event) => setAns2(event.target.value)}
              ></input>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className='submitButton' >
        <button
          className='button_GRF'
          onClick={handleSubmit}
          placeholder='SUBMIT RESPONSE'
        >
          SUBMIT RESPONSE
        </button>{' '}
      </div>
    </div>
  );
}

export default Dashboard;
