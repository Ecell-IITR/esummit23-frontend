import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { FetchApi } from '../utils/FetchApi';

function Dashboard() {
  const userTemplate = {
    Full_name: '',
    Email: '',
    Mobile_no: '',
    Gender: '',
  };
  const [formFields, setFormFields] = useState([userTemplate]);
  const addMember = () => {
    let object = {
      Full_name: ' ',
      Email: ' ',
      Mobile_no: ' ',
      Gender: ' ',
    };

    setFormFields([...formFields, object]);
  };

  const [TeamName, setTeamName] = useState('');
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      users: [
        {
          full_name: FullName,
          email: Email,
          phone_number: PhoneNo,
        },
        {
          team_name: TeamName,
        },
      ],
    };

    FetchApi('post', 'http://localhost:8000/user/team_signup ', data, null)
      .then((res) => {
        toast.success('Query Submitted !');
        setTeamName('');
        setFullName('');
        setEmail('');
        setPhoneNo('');
      })
      .catch((err) => {
        toast.error('Query Unsuccessful!');
        console.log(err);
      });
  };

  return (
    <div className='container_GRF'>
      <div className='formHeading_GRF'>
        Application form - *EVENT NAME ROUND 1
      </div>

      <div className='teamName_GRF'>
        <input
          className='inputForm'
          type='text'
          name='teamName'
          placeholder='Team Name'
          onChange={(event) => setTeamName(event.target.value)}
        />
      </div>
      {formFields.map((form, index) => {
        return (
          <div className='detailsMember_GRF' key={index}>
            <div className='memberNumber_GRF'>Member {index + 1}</div>
            <div className='otherDetailsMember_GRF'>
              <div className='autoFill_GRF'>
                <div
                  style={index >= 0 ? { display: 'none' } : {}}
                  className='select_GRF'
                >
                  <input class='checkbox-custom' type='checkbox' />
                </div>
                <div
                  className='autoFillDetails_GRF'
                  style={index >= 0 ? { display: 'none' } : {}}
                >
                  Auto fill if you are the team leader
                </div>
              </div>
              <div className='detailsOfMembers_GFR'>
                <div className='commonDetail_GRF fullName_GRF'>
                  <input
                    name='FullName'
                    className='commonInput_GRF'
                    type='text'
                    placeholder='Full Name'
                    onChange={(event) => setFullName(event.target.value)}
                  ></input>
                </div>
                <div className='commonDetail_GRF email_GRF'>
                  <input
                    className='commonInput_GRF'
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </div>
                <div className='commonDetail_GRF mobNo_GRF'>
                  r
                  <input
                    name='phoneNo'
                    className='commonInput_GRF'
                    type='phoneNo'
                    placeholder='Mobile No'
                    onChange={(event) => setPhoneNo(event.target.value)}
                  ></input>
                </div>
                <div className='commonDetail_GRF gender_GRF'>
                  <input
                    className='commonInput_GRF'
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    onChange={(event) => setGender(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className='addMember_GRF'>
        <div className='addMemberOption_GRF'>
          <div className='addSymbol_GRF' onClick={addMember}>
            <Image
              className='addImage'
              src='/add.webp'
              width='22rem'
              height='9rem'
            ></Image>
          </div>
          <div className='afterAddSymbol_GRF' onClick={addMember}>
            Add Member
          </div>
        </div>
      </div>

      <div className='questionBigContainer_GRF'>
        <div>
          <div className='questionSmallContainer_GRF'>
            Q1. Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at at
            quis ornare. at at quis ornare.
          </div>
          <div className='answerHere_GRF'>
            <input
              className='commonInput_GRF'
              type='text'
              placeholder='Answer Here'
            ></input>
          </div>
        </div>
        <div>
          <div className='questionSmallContainer_GRF'>
            Q2. Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at at
            quis ornare. at at quis ornare.
          </div>
          <div className='answerHere_GRF'>
            <input
              className='commonInput_GRF'
              type='paragraph'
              placeholder='Answer Here'
            ></input>
          </div>
        </div>
      </div>

      <div className='submitButton' onClick={handleSubmit}>
        <button className='button_GRF' placeholder='SUBMIT RESPONSE'>
          SUBMIT RESPONSE
        </button>{' '}
      </div>
    </div>
  );
}

export default Dashboard;
