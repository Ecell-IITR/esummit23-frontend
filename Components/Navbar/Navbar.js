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
          setActive('eve');
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
        <div className='navbarContainer'>
        <div className="navbarEsummitLogo">
          <img src='esummitLogo.svg' className="navbarImage"/>
        </div>
        {/* <Navbar.Toggle aria-controls='navbarScroll' /> */}
        {/* <Navbar.Collapse id='navbarScroll'> */}
        <div>
          <ul
            className='mze-auto my-2 my-lg-0 navbarText d-flex flex-row gap-4 navbarUl'
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
            <Link href='/#action2' passHref>
            <div
              className={
                'eve' == active ? 'navbarActive' : 'navbarListBox'
              }>
   
              Events
           
            </div>
            </Link>
           
        </li>
          
        <li>
          <Link href='#action3'>
            <div
              className={
                'speakers' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
              Speakers
            </div>
            </Link>
        </li>
        <li>
          <Link href='#action4'>
            <div
              className={
                'sponsors' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
             Sponsors
            </div>
            </Link>
        </li>
        <li>
          <Link href='#action5'>
            <div
              className={
                'merchandice' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
             Merchandice
            </div>
            </Link>
        </li>
        <li>
          <Link href='#action6'>
            <div
              className={
                'about' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
             About
            </div>
            </Link>
        </li>
          </ul>
          </div>
          {/* </Navbar.Collapse> */}
          <div
            className='d-flex align-items-center flex-row'
            style={{ gap: '36px' }}
          >
            <a href='#action8' className="navbarLogIn">
              <span className="navbarLogIn">Log in</span>
            </a>
            <button className="navbarButton">Register</button>
          </div>
          </div>
      </Container>
    </Navbar>
  
  );
};

export default NavScrollExample;
