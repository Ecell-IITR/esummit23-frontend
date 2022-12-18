import Navbar from '../Components/Navbar/Navbar';
import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer/Footer';
import MobileProvider from '../utils/MobileContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
