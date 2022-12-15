import { ALL_EVENTS_API } from '../../utils/APIs';
import FetchApi from "../../utils/fetchAPI";
import React, { useState, useEffect } from 'react';

export default function Events({posts}) {

  console.log(posts)
  

  return (
    <div>
      <h1>Events</h1>
      {posts.map((post,id) => {
        return (
          <>      
            <h2> {post.event_name}</h2>
            <p>{post.card_description}</p>
            </>
        );
      })}
      </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(ALL_EVENTS_API);
  
  const posts = await res?.json()
  console.log(res)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}