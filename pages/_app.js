import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../Components/Footer/Footer';
// import Events from '../Components/Events/Events';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import Register from '../Components/Register';

function MyApp({ Component, pageProps }) {
  return <>
       
      
            <Component {...pageProps}/>
            <ProfileCard/>
            <br></br>
            <br></br>
            <Register/>
  

          </>;
}

export default MyApp;