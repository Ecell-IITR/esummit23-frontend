import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function NavScrollExample() {
  const [active, setActive] = useState("");

  const router = useRouter();
  useEffect(() => {
    switch (router.asPath) {
      case '/':
        setActive('home');
        break;
        case '/events':
          setActive('events');
          break;
        case '/speakers':
          setActive('speakers');
          break;
      case '/comingSoonSponsors':
        setActive('sponsors');
        break;
        case '/Merchandice':
          setActive('merchandice');
          break;
      case '/about':
        setActive('About');
        break;
      default:
        setActive('');
    }
  });
  return (
    <Navbar className="navbarParent">
      <Container fluid>
        <div className="navbarEsummitLogo">
          <img src='esummitLogo.svg' className="navbarImage"/>
        </div>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <ul
            className='mze-auto my-2 my-lg-0 navbarText d-flex gap-4 navbarUl'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <li>
            <Link href='/' passHref>
            <div
              className={
                'home' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
            
              Home
            
            </div>
            </Link>
        </li>
            
            <li>
            <Link href='/' passHref>
            <div
              className={
                'events' == active ? 'navbarActive' : 'navbarListBox'
              }>
   
              Events
           
            </div>
            </Link>
            {' '}
        </li>
          
        <li>
            <div
              className={
                'speakers' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
            <Link href='#action3'>
              Speakers
            </Link>
            </div>
        </li>
        <li>
            <div
              className={
                'sponsors' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
            <Link href='#action4'>
             Sponsors
            </Link>
            </div>
        </li>
        <li>
            <div
              className={
                'merchandice' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
            <Link href='#action5'>
             Merchandice
            </Link>
            </div>
        </li>
        <li>
            <div
              className={
                'about' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
            <Link href='#action5'>
             About
            </Link>
            </div>
        </li>
          </ul>
          </Navbar.Collapse>
          <div
            className='d-flex align-items-center me-5'
            style={{ gap: '36px' }}
          >
            <a href='#action8' className="navbarLogIn">
              <span className="navbarLogIn">Log in</span>
            </a>
            <button className="navbarButton">Register</button>
          </div>
      </Container>
    </Navbar>
  
  );
};

export default NavScrollExample;
