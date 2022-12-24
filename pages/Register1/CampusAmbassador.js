import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';

const CampusAmbassador = () => {
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
        src='/loginMob.webp'
        layout='fill'
        />
      </div>

      <div className ="RegisterHere">
<div className="RegisterLeft">
  <div className="RegisterForm">
    <div className='eSummitLogo'
    style={{height: '212px', width: '200px'}}>
      <Image
      src ='/summitLogo.png'
      height={'77'}
      width={'294'}
      />
    </div>
    <h1 className="CreateAccount"> Personal Details</h1>
    <h3 className='CreateAccountsubTitle'>Please fill all the required fields.</h3>
    <div className="mobRequiredDetails">
        <input type="text" name="" id="" placeholder='Institute Name' />
        <input type="text" name="" id="" placeholder='Degree'/>
        <input type="number" name="" id="" placeholder='Current Year' />
        <input type="text" name="" id="" placeholder='State'/>
        <input type="text" name="" id="" placeholder='City'/>
        <input type="password" name="" id="" placeholder='Set password'/>
        <input type="password" name="" id="" placeholder='Confirm Password'/>
    </div>
    <button type='submit' className="CreateAccountButton">Create Account</button>
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
        <h1 className="CreateAccount"> Personal Details</h1>
        <h3 className='CreateAccountsubTitle'>Please fill all the required fields.</h3>
        <div className="RequiredDetails">
            <input type="text" name="" id="" placeholder='Institute Name' />
            <input type="text" name="" id="" placeholder='Degree'/>
            <input type="number" name="" id="" placeholder='Current Year' />
            <input type="text" name="" id="" placeholder='State'/>
            <input type="text" name="" id="" placeholder='City'/>
            <input type="password" name="" id="" placeholder='Set password'/>
            <input type="password" name="" id="" placeholder='Confirm Password'/>
        </div>
        <button type='submit' className="CreateAccountButton">Create Account</button>
        </div>
       
    
        <div className='RegisterRight'>
       
        </div>
    
    
        </div>
        </div>
        </div>
        </>
      )
    }
}

export default CampusAmbassador;