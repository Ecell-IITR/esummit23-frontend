import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import MobileProvider from '../utils/MobileContext';
import Dashboard from '../Components/Dashboard_Form';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileProvider>
        <Dashboard/>
        <Component {...pageProps} /> 
      </MobileProvider>
    </>
  );

}

export default MyApp;