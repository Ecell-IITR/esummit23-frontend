import React from 'react'
import Navbar from "../Navbar/Navbar"
import Events from "../../allevents"

const Ideathon = () => {
  return (
    <div className='ideaThon-main'>
     <div className='ideaThon-bg'>
      <div className='ideaBox1'>
        {Events.map((curr,index)=>{
          return(
            <div className="crt" key={index}>
            <div className="crt-disc">
              <div className='idea-Text1'>{curr.heading}</div>
              <p className='idea-Text2'>{curr.disc}</p>
            </div>
          </div>
          )
        })}
        {/* <div className='idea-Text1'>IDEATHON</div>
        <div className='idea-Text2'>Brainstorm your way through of mind-boggling problem statements based on real-world dilemmas to ideate, innovate and present a creative, practical and sustainable solution.</div> */}
        <button className='idea-Button'><span className='iBT'>APPLY NOW</span></button>
      </div>
      <div className='ideaBox2'>
        <img src="bgdesign.svg" alt="no image"/>
      </div>
     </div>
    </div>
  )
}

export default Ideathon


{/* <section className="abt-s-3">
            <h1> Perks of Participaing</h1>
            <div className="crts">
              {Certificates.map((curr,index)=>{
                return(
                  <div className="crt" key={index}>
                  <div className="crt-disc">
                    <h2>{curr.heading}</h2>
                    <p>{curr.disc}</p>
                  </div>
                </div>
                )
              })}
            </div>
        </section> */}