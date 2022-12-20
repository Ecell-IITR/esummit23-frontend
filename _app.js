import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer/Footer';
import MobileProvider from '../utils/MobileContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileProvider>
        <Component {...pageProps} /> <Footer />
      </MobileProvider>
    </>
  );
}

export default MyApp;
