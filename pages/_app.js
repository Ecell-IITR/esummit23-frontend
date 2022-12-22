import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Register'
import Login from './login'
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import MobileProvider from '../utils/MobileContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileProvider>
        <Registration/>
        {/* <Login/> */}
        <Component {...pageProps} /> 
      </MobileProvider>
    </>
  );

}

export default MyApp;