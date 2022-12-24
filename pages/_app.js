import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/EventsPage/Footer/Footer';
import Events from '../Components/EventsPage/Sponsor/Events';
import EventsIdeathon from '../Components/EventsPage/Timeline';
// import Register from '../Components/Register';
// import Ideathon from '../Components/EventsPage/Header/Ideathon';
import MobileProvider from '../utils/MobileContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileProvider>
        <Component {...pageProps} />
        <EventsIdeathon />
        <Events />
        <Footer />
      </MobileProvider>
    </>
  );
}

export default MyApp;
