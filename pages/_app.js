import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return<><Component {...pageProps} /> <Footer /></>;
}

export default MyApp;
