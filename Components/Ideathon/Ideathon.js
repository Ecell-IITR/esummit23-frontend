import React, { useCallback } from 'react'
import Navbar from "../Navbar/Navbar"
import axios from 'axios';
import {useState, useEffect} from 'react';

// export async function getStaticProps() {
//   const res = await axios('http://localhost:8000/events/Ideastorm');
//   const datas = await res?.json()
//   console.log(res)
//   return {
//     props: {
//       datas,
//     },
//   }
// }

function Ideathon() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const fetchPost = async () => {
    const response = await axios('http://localhost:8000/events/event')
    const data = await response.json();
    setPosts(data);
  }
  return (
    <div className='ideaThon-main'>
     <div className='ideaThon-bg'>
        {posts.map((data) => {
            <div className='ideaBox1' key={data.id}>
              <div className='idea-Text1'>{data.NAME}</div>
              <p className='idea-Text2'>{data.Description}</p>
        </div>
        })}
        <div className='ideaBox1'>
        {/* <div className='idea-Text1'>IDEASTORM</div>
        <div className='idea-Text2'>Brainstorm your way through of mind-boggling problem statements based on real-world dilemmas to ideate, innovate and present a creative, practical and sustainable solution.</div> */}
        <button className='idea-Button'><span className='iBT'>APPLY NOW</span></button>
     </div>
     </div>
    </div>
  )
}

export default Ideathon
