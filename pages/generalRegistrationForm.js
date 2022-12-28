import React from 'react'
import Image from 'next/image' 
function Dashboard() {


  return (
    <div className='container_GRF'>
    <div className='formHeading_GRF'> Application form - *EVENT NAME ROUND 1</div>
    
    <div className='teamName_GRF'><input className='input' type="text" placeholder='Team Name'></input></div>
    <div className='detailsMember_GRF'>
        <div className='memberNumber_GRF'>Member 1</div>
        <div className='otherDetailsMember_GRF'>
            <div className='autoFill_GRF'>
                <div className='select_GRF'></div>
                <div className='autoFillDetails_GRF'>Auto fill if you are the team leader</div>
            </div>
            <div className='detailsOfMembers_GFR'>
                <div className='commonDetail_GRF fullName_GRF'><input  className='commonInput_GRF' type="text" placeholder='Full Name'></input></div>
                <div className='commonDetail_GRF email_GRF'><input  className='commonInput_GRF' type="text" placeholder='Email Address'></input></div>
                <div className='commonDetail_GRF mobNo_GRF'><input  className='commonInput_GRF' type="text" placeholder='Mobile No'></input></div>
                <div className='commonDetail_GRF gender_GRF'><input  className='commonInput_GRF' type="text" placeholder='Gender'></input></div>
            </div>
        </div>
    </div>
    <div className='addMember_GRF'>
      <div className='addMemberOption_GRF'>
        <div className='addSymbol_GRF'><Image className='addImage' src="/add.webp" width="22rem" height="9rem"></Image></div>
        <div className='afterAddSymbol_GRF'>Add Member</div>
      </div>
    </div>

    <div className='questionBigContainer_GRF'>
    
    <div className='questionSmallContainer_GRF'>Q1. Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at at quis ornare. at at quis ornare.</div>
    <div className='answerHere_GRF'><input className='commonInput_GRF' type="text" placeholder='Answer Here'></input></div>
    <div className='questionSmallContainer_GRF'>Q2. Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at at quis ornare. at at quis ornare.</div>
    <div className='answerHere_GRF'><input className='commonInput_GRF' type="text" placeholder='Answer Here'></input></div>
    <div className='questionSmallContainer_GRF'>Q3. Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at at quis ornare. at at quis ornare.</div>
    <div className='answerHere_GRF'><input className='commonInput_GRF' type="text" placeholder='Answer Here'></input></div>
    <div className='questionSmallContainer_GRF'>Q4. Lorem ipsum dolor sit amet consectetur. Ultrices vulputate at at quis ornare. at at quis ornare.</div>
    <div className='answerHere_GRF'><input className='commonInput_GRF' type="text" placeholder='Answer Here'></input></div>
    
    
    </div>

    <div className='submitButton'><button className='button_GRF' placeholder='SUBMIT RESPONSE'>SUBMIT RESPONSE</button> </div>
    </div>
  )
}

export default Dashboard
