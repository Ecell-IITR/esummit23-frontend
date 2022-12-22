import React from 'react'
import Image from 'next/image'
import LINK from 'next/link'

const SelectIdentity = () => {
  return (
    
       <>
    <div className = 'RegisterContainer'>
      <div className="ImageComponent" style={{
        height: '100vh', width: '100vw'
      }}>
        <Image
        src='/login.png'
        layout='fill'
        />
      </div>

      <div className ="RegisterHere">
<div className="RegisterLeft">
  <div className="RegisterForm">
    <div className='SummitLogo'
    style={{height: '100px', width: '200px'}}>
      <Image
      src ='/summitLogo.png'
      height={'77'}
      width={'294'}
      />
    </div>
    
    <h1 className="CreateAccount"> Select your Identity</h1>
    <h3 className='CreateAccountsubTitle'>Please select appropriate option.</h3>
    <div className='RegisterIdentity'>

    <LINK href='IITRStudentRegister'><button id='RegisterIITRStudent'>As an IITR student</button></LINK>
    <LINK href='NonIITRStudent'><button> As a Non-IITR student</button></LINK>
    <LINK href='CampusAmbassador'><button>As a Campus Ambassador</button></LINK>   
    <LINK href='ProfessionalsRegistration'><button>As a Professional</button></LINK>
       </div>
       
       
    </div>
    <div className='RegisterRight'>
   
    </div>


    </div>
    </div>
    </div>
    </>
  )
}

export default SelectIdentity
