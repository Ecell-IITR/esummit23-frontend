import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'

function NavScrollExample() {
  return (
    <Navbar className={styles.parent}>
      <Container fluid>
      <div className={styles.esummitLogo}><img src="esummitLogo.svg" className={styles.image}></img></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div
            className="me-auto my-2 my-lg-0 navbarText d-flex gap-4"
            style={{ maxHeight: '100px'}}
            navbarScroll
          > 
            <a className='listBox' href="#action1">Home</a>
            <a href="#action2">Events</a>
            <a href="#action3">Speakers</a>
            <a href="#action4">Sponsors</a>
            <a href="#action5">Merchandice</a>
            <a href="#action6">Sponsors</a>
            <a href="#action7">About</a>
            </div>
          <div className='d-flex align-items-center me-5' style={{gap:"36px",}}>
            <a href="#action8"><span className='log-In'>Log in</span></a>
            <button className={styles.button}>Register</button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;