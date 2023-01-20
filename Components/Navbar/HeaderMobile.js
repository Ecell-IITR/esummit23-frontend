import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../utils/auth-context';
import { isAuthenticated, unAuthenticate } from '../../utils';
export const HeaderMobile = () => {
  const [isCA, setIsCA] = useState(false);
  const [Checked, setChecked] = useState(false);
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('userRoleType') === 'CA') setIsCA(true);
    return () => {
      setIsCA(false);
    };
  }, []);
  return (
    <div className='mobile-navbar-majorcontainer'>
      <div
        className='Hamburger'
        onClick={() => {
          setChecked(!Checked);
        }}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      <input checked={Checked} type='checkbox' />
      <Link href='/' className='image' passHref>
        <img
          src='summitLogo.png'
          alt='Esummit Logo'
          className='navbar-logo-mobile'
        />
      </Link>
      <ul className='mobilenavMenu-subcontent1'>
        <li className='mobilenavMenu-items'>
          <Link href='/' passHref>
            <div className='mobilenavMenu-links'>Home</div>
          </Link>
        </li>
        {
          <li className='mobilenavMenu-items'>
            <Link href='/events' passHref>
              <div className='mobilenavMenu-links'>Events</div>
            </Link>
          </li>
        }
        <li className='mobilenavMenu-items'>
          <Link href='/' passHref>
            <div className='mobilenavMenu-links'>Speakers</div>
          </Link>
        </li>
        <li className='mobilenavMenu-items'>
          <Link href='/' passHref>
            <div className='mobilenavMenu-links'>Sponsors</div>
          </Link>
        </li>
    
        {/* <li className='mobilenavMenu-items'>
          <Link href='/#faq' passHref>
            <div className='mobilenavMenu-links'>About</div>
          </Link>
        </li> */}



        {/* {isCA && (
          <>
            <li className='mobilenavMenu-items'>
              <Link href='/cap/tasks' passHref>
                <div className='mobilenavMenu-links mobilenavMenu-ca-tag'>
                  CAMPUS AMBASSADOR
                </div>
              </Link>
            </li>
            <li className='mobilenavMenu-items'>
              <Link href='/cap/tasks' passHref>
                <div className='mobilenavMenu-links'>TASKS</div>
              </Link>
            </li>
            <li className='mobilenavMenu-items'>
              <Link href='/cap/leaderboard' passHref>
                <div className='mobilenavMenu-links'>LEADERBOARD</div>
              </Link>
            </li>
            <li className='mobilenavMenu-items'>
              <Link href='/cap/resources' passHref>
                <div className='mobilenavMenu-links'>CA RULEBOOK</div>
              </Link>
            </li>
          </>
        )} */}
        {user && !isCA && (
          <>
            {/* <li className='mobilenavMenu-items'>
              <Link href='/nonca/events' passHref>
                <div className='mobilenavMenu-links mobilenavMenu-ca-tag'>
                  Dashboard
                </div>
              </Link>
            </li>
            <li className='mobilenavMenu-items'>
              <Link href='/nonca/events' passHref>
                <div className='mobilenavMenu-links'>EVENTS</div>
              </Link>
            </li>
            <li className='mobilenavMenu-items'>
              <Link href='/nonca/resources' passHref>
                <div className='mobilenavMenu-links'>RESOURCES</div>
              </Link>
            </li> */}
          </>
        )}
        {isAuthenticated() ? (
          <button
            onClick={() => {
              unAuthenticate();
              router.push('/login');
            }}
            className='navbarButton'
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              router.push('/login');
            }}
            className='navbarButton'
          >
            Login / Register
          </button>
        )}
      </ul>
    </div>
  );
};

export default HeaderMobile;