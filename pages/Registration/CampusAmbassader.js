import Image from 'next/image'
import { REGISTER_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import React, { useState,useEffect} from 'react'


const CampusAmbassader = () => {
  const [Institute , setInstitute] = useState('');
  const [Degree, setDegree] = useState('');
  const [State, setState] = useState('');
  const [Year, setYear] = useState('');
  const [City, setCity] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const setMobile = useUpdateMobile();

  const Submit = () => {
    if(password.length > 7){
    if(password === Confirmpassword){
      FetchApi(
        'POST',
        REGISTER_API,
        {
      Institute_Name: Institute,
      degee: Degree,
       year: Year,
       city: City,
       state: State,
       password: password,       
    })
    }
    else{
      alert('password doesnot match')
    }
  }
  else{
    alert("password should have 8 or more characters")
  }
  }
  useEffect(() => {
    setMobile();
  }, []);
  if (useMobile().isMobile) {
    return (
      <div>

      </div>
    )
  }
  else{
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
      <h1 className="registrationTitle">Personal Details</h1>
      <h3 className="registrationsubTitle">Please fill all the required fields.</h3>
      <div className='formInput'>
        <input type="text" value={Institute}  placeholder='Institute Name' onChange={(e) => setInstitute()} />
        <input type="text" value={Degree} placeholder='Degree' onChange={(e) => setDegree()} />
        <input type="number" value={Year} placeholder='Current Year' onChange={(e) => setYear()}  />
        <input type="text" value={State} placeholder='State' onChange={(e) => setState()}  />
        <input type="text" value={City} placeholder='City' onChange={(e) => setCity()}  />
        <input type="password" value={password} placeholder='Set Password' onChange={(e) => setpassword()}  />
        <input type="password" value={Confirmpassword} placeholder='Confirm Password' onChange={(e) => setConfirmpassword()}  />
    </div>
    <button type="submit" className='createAccount'onClick={Submit}>Create Account</button>
  </div>
  </div>
  <div className="RegisterRight"></div>
        </div>     
        </div>
    </>
  )
 }
}

export default CampusAmbassader