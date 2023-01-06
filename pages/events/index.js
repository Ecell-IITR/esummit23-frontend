import { ALL_EVENTS_API } from '../../utils/APIs';
import FetchApi from '../../utils/fetchAPI';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../utils';


export default function Events({ posts }) {
  const router = useRouter();
  const rederict=()=>{
    if(isAuthenticated()){
      router.push(`/dashboard`)
    }else{
      router.push(`/login`)
    }
  }
  const [width,setWidth]=useState(0)

  useEffect(() => {
    const rotation = window.innerWidth;
    setWidth(rotation);
    console.log(width);
  });
  console.log(posts);
  return (
    <div className='eventPgCont'>
      <div className='eventPgHdng'>
        Events{' '}
        {width < 450 ? (
          <>
            <br />
          </>
        ) : (
          <></>
        )}
        and{' '}
        {width < 450 ? (
          <>
            <br />
          </>
        ) : (
          <></>
        )}{' '}
        Competitions
      </div>
      <div className='eventPgFlex'>
        {posts?.map((post, id) => {
          return (
            <div className='eventPgCards'>
              <div className='eventcimg'>
                <Image
                  src='/Rectangle 118.png'
                  height='199px'
                  width='376px'
                ></Image>
              </div>
              <div className='eventPgAbout'>
                <h2
                  style={{
                    fontFamily: 'Lexend',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '24px',
                  }}
                >
                  {post?.event_name}
                </h2>
                <div
                  className='eventPgDesc'
                  dangerouslySetInnerHTML={{ __html: post?.card_description }}
                ></div>

                  <a classname='eventPga' href={"/events/"+post?.event_name}>...Read more</a>

                {/* ({post.card_description.length>200?post.card_description.slice(0,200):post.card_description}) */}
              </div>

              <div className="eventPgBtnC">

                <button className="eventPgBtn" onClick={()=>{rederict()}}> Apply Now </button>

                <Image src='/Vector.png' height='16px' width='21.3px'></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(ALL_EVENTS_API);

  const posts = await res?.json();
  return {
    props: {
      posts,
    },
  };
}
