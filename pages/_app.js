import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../Components/Footer/Footer';
import MobileProvider from '../utils/MobileContext';
import Navbar from '../Components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileProvider>
        <Navbar />
        <Component {...pageProps} />
      </MobileProvider>
    </>
  );
}

export default MyApp;
