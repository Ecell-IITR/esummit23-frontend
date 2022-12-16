import React from 'react'



export default function Ideathon({data}) {
  // const [data, setdata] = useState([]);
  console.log(data);
  // setdata(data);
  
  return (
    <>
    </>
    // <div className='ideaThon-main'>
    //  <div className='ideaThon-bg'>
    //     {/* {data.map((dat,id) => { 
    //       <div className='ideaBox1'>
    //           <div className='idea-Text1'>{dat.NAME}</div>
    //           <p className='idea-Text2'>{dat.Description}</p>
    //     </div> 
    //      })} */}
    //     <div className='ideaBox1'>
    //     {/* <div className='idea-Text1'>IDEASTORM</div>
    //     <div className='idea-Text2'>Brainstorm your way through of mind-boggling problem statements based on real-world dilemmas to ideate, innovate and present a creative, practical and sustainable solution.</div> */}
    //     <button className='idea-Button'><span className='iBT'>APPLY NOW</span></button>
    //  </div>
    //  </div>
    // </div>
  )
}




export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/events/Ideastorm");
  const data = await res?.json()
  console.log(data)
  console.log(res)
  return {
    props: {
      data,
    },
  }
}