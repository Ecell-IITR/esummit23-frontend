import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../utils/auth-context';
import { getUserRoleType } from '../../utils';

export const HeaderMobile = () => {
  const [isCA, setIsCA] = useState(false);
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
      <input type='checkbox' />

      <div className='Hamburger'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      <Link href='/' className='image' passHref>
        <img
          src='/Esummitlogofinal.webp'
          alt='navbar-logo'
          className='navbar-logo-mobile'
        />
      </Link>
      <ul className='mobilenavMenu-subcontent1'>
        <li className='mobilenavMenu-items'>
          <Link href='/' passHref>
            <div className='mobilenavMenu-links'>HOME</div>
          </Link>
        </li>
        {
          <li className='mobilenavMenu-items'>
            <Link href='/team' passHref>
              <div className='mobilenavMenu-links'>TEAM</div>
            </Link>
          </li>
        }
        <li className='mobilenavMenu-items'>
          <Link href='/events' passHref>
            <div className='mobilenavMenu-links'>EVENTS</div>
          </Link>
        </li>
        <li className='mobilenavMenu-items'>
          <Link href='/speakers' passHref>
            <div className='mobilenavMenu-links'>SPEAKERS</div>
          </Link>
        </li>
        <li className='mobilenavMenu-items'>
          <Link href='/sponsors' passHref>
            <div className='mobilenavMenu-links'>SPONSORS</div>
          </Link>
        </li>
        <li className='mobilenavMenu-items'>
          <Link href='/#faq' passHref>
            <div className='mobilenavMenu-links'>FAQ</div>
          </Link>
        </li>
        {isCA && (
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
        )}
        {user && !isCA && (
          <>
            <li className='mobilenavMenu-items'>
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
            </li>
          </>
        )}
        {user ? (
          <>
            <li className='mobilenavMenu-items'>
              <Link href='/logout' passHref>
                <div className='mobilenavMenu-links mobilenavMenu-ca-tag'>
                  Logout
                </div>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className='mobilenavMenu-items'>
              <Link href='/login' passHref>
                <div className='mobilenavMenu-links mobilenavMenu-ca-tag'>
                  Login
                </div>
              </Link>
            </li>
            <li className='mobilenavMenu-items'>
              <Link href='/register' passHref>
                <div className='mobilenavMenu-links'>Register</div>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default HeaderMobile;
