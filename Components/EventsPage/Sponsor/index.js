import Image from 'next/image';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../../utils';
import { useEffect, useState } from 'react';

function Events(props) {
  const router = useRouter();
  const [x, setx] = useState([]);

  useEffect(() => {
    let i = 0;
    let t = [];
    if (props.partners.length == 0) {
      return;
    } else {
      while (i < props.partners.length) {
        if ((props.partners.length - i) / 3 > 0) {
          t = [...t, props.partners.slice(i, i + 3)];

          setx(t);

          i += 2;
        }
        i += 1;
      }
    }
  }, []);
  const rederict = () => {
    if (isAuthenticated()) {
      router.push(`/dashboard`);
    } else {
      router.push(`/login`);
    }
  };
  const OnSubmit = () => {
    props.setShow(true);
    props.GetData(props.name);
  };

  return (
    <>
      <div
        className='container events'
        style={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          height: '120%',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'Lexend',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '110%',
            color: '#FFFFFF',
            paddingTop: '2rem',
            textAlign: 'center',
          }}
        >
          {' '}
          Perks of Participating
        </div>
        <div style={{ paddingTop: '2rem' }} className='certificates'>
          {props?.perks ? (
            props?.perks.map((curr, index) => {
              return (
                <div className='certificate' key={index}>
                  <div className='certificateImage'>
                    <div className='img'>
                      {curr.image !== '' ? (
                        <img src={curr.image} />
                      ) : (
                        <svg
                          width='20'
                          height='22'
                          viewBox='0 0 20 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.37896 17.017H19.3307V0.111328H3.33494C2.62728 0.113603 1.94925 0.395729 1.44886 0.896123C0.948463 1.39652 0.666338 2.07454 0.664062 2.7822V18.3488H0.664547C0.664547 18.3554 0.664062 18.362 0.664062 18.3687C0.664062 19.9272 1.88717 21.2435 3.33494 21.2435H19.3307V19.8346H3.33494C2.67443 19.8346 2.07287 19.1359 2.07287 18.3686C2.07287 17.636 2.67095 17.017 3.37896 17.017ZM14.7521 1.53479V9.14305L12.6213 7.27242L10.5257 9.13208V1.53479H14.7521ZM9.11689 1.52013V11.0296H10.5099L12.6264 9.1515L14.7655 11.0296H16.1609V1.52013H17.9219V15.6082H4.894L4.89048 1.52013H9.11689ZM3.33494 1.52013H3.48167L3.48502 15.6082H3.37879C2.9207 15.6083 2.47056 15.7279 2.07287 15.9552V2.79321C2.07179 2.45714 2.20406 2.13437 2.44066 1.89571C2.67726 1.65704 2.99887 1.52197 3.33494 1.52013Z'
                            fill='#633A26'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className='certificateDescription'>
                    <h4>{curr.heading}</h4>
                    <div> {curr.description}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* {x?.map((curr, index) => {
        return (
          <div className='CardContainer' key='index'>
            <div className='sponsCardContainer'>
              <div className='CardBox1'></div>
              <div className='CardContent'>
                <div className='sponsorImage'>
                  <Image src='/Sponsor.webp' height='60rem' width='700rem' />
                </div>
                <div
                  className='noOfImages'
                  //  style={{display:"flex",gap:"5vw",alignItems:"center"}}
                >
                  {curr?.map((items, index1) => {
                    return (
                      <div className='gfg' key='index1'>
                        <Image
                          src={items?.image}
                          width='240rem'
                          height='180rem'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className='CardBox2'></div>
            </div>
          </div>
        );
      })} */}

      <div className='parentIS'>
        <div className='coordinatorHeadingIS'>Event Coordinators</div>
        <div className='coordinatorDetailIS'>
          {props.Coordinator.map((curr, index) => {
            return (
              <div className='A'>
                <div className='B'>
                  <img
                    className='imageCordinator'
                    src={curr?.image ? curr?.image : ''}
                    height='150px'
                    width='160px'
                  />
                </div>
                <div className='C'>
                  <div className='nameISCoordinator'>{curr.name}</div>
                  <div className='mailISCoordinator'>
                    <div className='inbox'>
                      <Image src='/inbox.webp' height='25%' width='30%'></Image>
                    </div>
                    <div className='mailId'>
                      <a
                        href={'mailTo:' + curr.email}
                        style={{ color: '#2A1809', textDecoration: 'none' }}
                      >
                        {curr.email}
                      </a>
                    </div>
                  </div>
                  <div className='contactISCordinator'>
                    <div className='inbox'>
                      <Image src='/phone.webp' height='25%' width='30%'></Image>
                    </div>
                    <div className='mailId'>{curr.phone_number}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='registerIS'>
          <div className='registerBack'>
            <div className='registerFront'>
              <div className='boldRegisterQuestion'>
                Haven't registered yet?{' '}
              </div>
              <div className='lightRegisterQuestion'>
                {' '}
                Register soon to get additional benefits
              </div>
              <div className='registerButton'>
                {' '}
                <button
                  onClick={OnSubmit}
                  className='button'
                  style={{ fontStyle: ' Lexend', fontWeight: '600' }}
                >
                  REGISTER NOW!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
