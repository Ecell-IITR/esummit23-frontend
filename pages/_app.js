import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileProvider from '../utils/MobileContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileProvider>
        <Component {...pageProps} />   
      </MobileProvider>
    </>
  );
}

export default MyApp;
