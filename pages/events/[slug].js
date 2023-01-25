import FetchApi from '../../utils/fetchAPI';
import React, { useState, useEffect } from 'react';
import { EVENT_API } from '../../utils/APIs';
import { useRouter } from 'next/router';
import Header from '../../Components/Events/Header';
import Timline from '../../Components/EventsPage/Timeline';

import Sponsors from '../../Components/EventsPage/Sponsor';
import { useMobile, useUpdateMobile } from '../../utils/MobileContext';
import { SINGLE_SERVICES } from '../../utils/APIs';
import DashboardForm from '../../Components/DashboardForm';
import { Modal } from 'react-bootstrap';
export default function EventsDetails({ details }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const setMobile = useUpdateMobile();
  const [show, setShow] = useState(false);
  const [No, setNo] = useState(0);
  const [question1, setquestion1] = useState('');
  const [question2, setquestion2] = useState('');
  const handleClose = () => setShow(false);

  useEffect(() => {
    setMobile();
  }, []);
  const GetData = (name) => {
    FetchApi('POST', SINGLE_SERVICES, { service_name: router.query.slug }, null)
      .then((res) => {
        setName(res.data.name);
        setquestion1(res.data.question1);
        setquestion2(res.data.question2);
        setNo(res.data.no_of_QA);
      })
      .catch((err) => {});
  };
  return (
    <>
      <Modal contentClassName='my-modal' show={show} onHide={handleClose}>
        <DashboardForm
          Auth={true}
          handleClose={handleClose}
          noQuestions={No}
          name={name}
          Q_1={question1}
          Q_2={question2}
        />
      </Modal>
      <Header
        name={details.event_name}
        tagline={details.tagline}
        type={details.Type}
        start={details.registraion_start_date}
        end={details.registraion_end_date}
        card={
          useMobile().isMobile ? details.card_image : details.background_image
        }
        GetData={GetData}
        setShow={setShow}
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
        partners={details.event_partners}
        GetData={GetData}
        setShow={setShow}
      />
    </>
  );
}
export async function getServerSideProps({ params }) {
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
