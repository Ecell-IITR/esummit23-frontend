import React, { useEffect } from 'react';
import { EVENT_API } from '../../utils/APIs';
import { useRouter } from 'next/router';
import Header from '../../Components/Events/Header';
import Timline from '../../Components/EventsPage/Timeline';
import Sponsors from '../../Components/EventsPage/Sponsor';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
export default function EventsDetails({ details }) {
  const router = useRouter();
  
  
  const setMobile = useUpdateMobile();


  useEffect(() => {
    setMobile();
  }, []);
  return (
    <>
      <Header
        name={details.event_name}
        tagline={details.tagline}
        type={details.Type}
        start={details.registraion_start_date}
        end={details.registraion_end_date}
        card={
          useMobile().isMobile ? details.card_image : details.background_image
        }
      />
      <Timline
        name={details.event_name}
        desc={details.description}
        rules={details.event_rules}
        eligiblity={details.event_eligibility}
        round={details.event_rounds}
      />
      <Sponsors
        perks={details.event_perks}
        Coordinator={details.events_coordinators}
        partners={[]}
      />
    </>
  );
}
export async function getServerSideProps({ params}) {

  const url = EVENT_API(params.slug);
 
  const response = await fetch(url);
  const detailsEvents = await response.json();
  const details = detailsEvents[0];

  return {
    props: {
      details,
    },
  };
}
