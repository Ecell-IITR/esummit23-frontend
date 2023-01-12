import React, { useEffect, useState } from 'react';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import Register from '../Components/Register';
import { getUserDetails, getAuthToken } from '../utils';
import { USER_SERVICES_API } from '../utils/APIs';
import FetchApi from '../utils/fetchAPI';
import DashboardForm from '../Components/DashboardForm';
import Modal from 'react-bootstrap/Modal';
import { isAuthenticated } from '../utils';
import { useRouter } from 'next/router';
import Navbar from '../Components/Navbar';
function Dashboard() {
  const [name, setName] = useState('');
  const [Id, setId] = useState('');

  const [Reg, setReg] = useState([]);
  const [Avail, setAvail] = useState([]);
  const [attempts, setattempts] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const router = useRouter();

  useEffect(() => {
    const [first, second] = getUserDetails();

    // setName(second[0]);
    setId(second);
    setName(first);

    if (isAuthenticated()) {
      router.push(`/dashboard`);
    } else {
      router.push(`/login`);
    }

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
    <div style={{minHeight:"100vh",minWidth:"100vw",background:"#301a08",height:"auto",width:"auto"}}>
      <Navbar/>
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
                      <Modal
                        contentClassName='my-modal'
                        show={show}
                        onHide={handleClose}
                      >
                        <DashboardForm
                          handleClose={handleClose}
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
    </div>
  );
}

export default Dashboard;
