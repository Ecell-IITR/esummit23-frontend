import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Register from '../components/Register';
import { getUserDetails, getAuthToken } from '../utils';
import { USER_SERVICES_API } from '../utils/APIs';
import FetchApi from '../utils/fetchAPI';
import DashboardForm from '../Components/DashboardForm';
import Modal from 'react-bootstrap/Modal';
function Dashboard() {
  const [name, setName] = useState('');
  const [Id, setId] = useState('');
  const [Auth, setAuth] = useState('');
  const [Reg, setReg] = useState([]);
  const [Avail, setAvail] = useState([]);
  const [attempts, setattempts] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const [first, second] = getUserDetails();

    // setName(second[0]);
    setId(second);
    setName(first);

    FetchApi('get', USER_SERVICES_API, null, getAuthToken())
      .then((res) => {
        setReg(res.data.opt);
        setAvail(res.data.rest);
      })
      .catch((err) => {
        setattempts(attempts + 1);
        console.log(err);
      });
  }, []);

  return (
    <div className='dashboardContainer'>
      <div className='dashboardSubContainer'>
        <div className='dashboardContainerHeader'>
          <ProfileCard name={name} esummit_id={Id} />
          <div></div>
        </div>
        <div className='dashboardEventContainer'>
          <div className='dashboardEventHeader'>Events Registered</div>
          <div className='dashboardEventCardsContainer'>
            {Reg.map((item) => {
              return (
                <Register
                  IsRegistered={1}
                  img={item.img}
                  name={item.name}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
        <div className='dashboardEventContainer'>
          <div className='dashboardEventHeader'>Events Available</div>
          <div className='dashboardEventCardsContainer'>
            {Avail.map((item) => {
              return (
                <>
                  <div className='dashboardRegisterBox'>
                    <Register
                      isRegistered={0}
                      img={item.img}
                      name={item.name}
                      desc={item.desc}
                    />
                    <Modal show={show} onHide={handleClose}>
                      <DashboardForm
                        noQuestions={item.no_of_QA}
                        name={item.name}
                        Q_1={item.question1}
                        Q_2={item.question2}
                      />
                    </Modal>
                    <div
                      onClick={() => {
                        setShow(true);
                      }}
                      className='dashboardRegisterButton'
                    >
                      Register
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await FetchApi("POST",USER_SERVICES_API,{});

//   const posts = await res?.json();
//   console.log(res);
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {

//     },
//   };
// }
