import React,{useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';



const  Identity = () => { 
  const setMobile = useUpdateMobile();

  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
  return (
       <>
    <div className = 'mobRegisterContainer'>
      <div className="ImageComponent" style={{
        height: '100vh', width: '100vw'
      }}>
        <Image
        src='/LoginMobile.png'
        layout='fill'
        />
      </div>

      <div className ="RegisterHere">
<div className="RegisterLeft">
  <div className="RegisterForm">
    <div className='eSummitLogo'
    style={{height: '202px', width: '200px'}}>
      <Image
      src ='/summitLogo.png'
      height={'77'}
      width={'294'}
      />
    </div>
    
    <h1 className="mobCreateAccount"> Select your Identity</h1>
    <h3 className='CreateAccountsubTitle'>Please select appropriate option.</h3>
    <div className='mobRegisterIdentity'>

    <Link href='/IITRStudentRegister'><button className='mRIbutton'>As an IITR student</button></Link>
    <Link href='/NonIITRStudent'><button className='mRIbutton'> As a Non-IITR student</button></Link>
    <Link href='/CampusAmbassador'><button className='mRIbutton'>As a Campus Ambassador</button></Link>   
    <Link href='/ProfessionalsRegistration'><button className='mRIbutton'>As a Professional</button></Link>
       </div>
       
       
    </div>
    <div className='RegisterRight'>
   
    </div>


    </div>
    </div>
    </div>
    </>
  )
    }else{
    return (
      <>
      <div className='RegisterationContainer'>
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
    <div className="RegisterLogo">
      <div className='SummitLogo'
      style={{height: '100px', width: '200px'}}>
        <Image
        src ='/summitLogo.png'
        height={'77'}
        width={'294'}
        />
      </div> 
      <h1 className="registrationTitle">Select Your Identity</h1>
      <h3 className="registrationsubTitle">Please select the appropriate option</h3>
    <div className='identityButton'>
    <Link href='IITRStudent'><button>As an IITR Student</button></Link>
    <Link href='nonIITRStudent'><button>As a Non-IITR Student</button></Link>
    <Link href='CampusAmbassader'><button>As a Campus Ambassador</button></Link>
    <Link href='Professional'><button>As a Professional</button></Link>
    </div>
  </div>
  </div>
  <div className="RegisterRight"></div>
        </div>     
        </div>
      </>
    )
  }
}
  export default Identity;