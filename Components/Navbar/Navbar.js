import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function NavDesktop() {
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
      case '/sponsors':
        setActive('sponsors');
        break;
        case '/merchandice':
          setActive('merchandice');
          break;
      case '/about':
        setActive('about');
        break;
      default:
        setActive('');
    }
  });
  return (
    <Navbar className="navbarParent">
      {/* <Container fluid> */}
        <div className="navbarEsummitLogo">
          <img src='esummitLogo.svg' className="navbarImage"/>
        </div>
        {/* <Navbar.Toggle aria-controls='navbarScroll' /> */}
          <ul
            className='navbarUl'
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
            <div className={
                'home' == active ? 'circle' : ''
              }/>
            </div>
            
            </Link>
        </li>
            
            <li>
            <Link href='/events' passHref>
            <div
              className={
                'events' == active ? 'navbarActive' : 'navbarListBox'
              }>
   
              Events
              <div className={
                'events' == active ? 'circle' : ''
              }/>
            </div>
            </Link>
           
        </li>
          
        <li>
          <Link href='/speakers'>
            <div
              className={
                'speakers' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
              Speakers
              <div className={
                'speakers' == active ? 'circle' : ''
              }/>
            </div>
            </Link>
        </li>
        <li>
          <Link href='/sponsors'>
            <div
              className={
                'sponsors' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
             Sponsors
             <div className={
                'sponsors' == active ? 'circle' : ''
              }/>
            </div>
            </Link>
        </li>
        <li>
          <Link href='/merchandice'>
            <div
              className={
                'merchandice' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
             Merchandice
             <div className={
                'merchandice' == active ? 'circle' : ''
              }/>
            </div>
            </Link>
        </li>
        <li>
          <Link href='/about'>
            <div
              className={
                'about' == active ? 'navbarActive' : 'navbarListBox'
              }
            >
             About
             <div className={
                'about' == active ? 'circle' : ''
              }/>
            </div>
            </Link>
        </li>
          </ul>
          <div
            className='d-flex align-items-center justify-content-center navBut'
            style={{ gap: '36px' }}
          >
            <button className="navbarButton">Login / Register</button>
          </div>
          
      {/* </Container> */}
    </Navbar>
  
  );
};

export default NavDesktop;
