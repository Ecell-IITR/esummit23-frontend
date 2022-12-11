import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer/Footer';

function MyApp({ Component, pageProps }) {
<<<<<<< Updated upstream
  return <Footer />;
=======
  // return <Navbar/>;
  return <Component {...pageProps} />;
>>>>>>> Stashed changes
}

export default MyApp;
