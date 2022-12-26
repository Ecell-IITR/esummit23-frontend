import React from 'react';
import { EVENT_API } from '../../utils/APIs';
import { useRouter } from 'next/router';
import Header from '../../Components/Events/Header';
import Timline from '../../Components/EventsPage/Timeline';
export default function EventsDetails({ details }) {
  const router = useRouter();

  console.log(details);
  return (
    <>
      <Header
        name={details.event_name}
        tagline={details.tagline}
        type={details.Type}
        start={details.registraion_start_date}
        end={details.registraion_end_date}
      />
      <Timline
        name={details.event_name}
        desc={details.description}
        rules={details.event_rules}
        eligiblity={details.event_eligibility}
        round={details.event_rounds}
      />
    </>
  );
}
export async function getServerSideProps({ params, req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  console.log(params);
  const url = EVENT_API(params.slug);
  console.log(url);
  const response = await fetch(url);
  const detailsEvents = await response.json();
  const details = detailsEvents[0];

  return {
    props: {
      details,
    },
  };
}
