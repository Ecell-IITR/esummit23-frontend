import '../styles/globals.css';
import '../styles/index.scss';


// import Events from '../pages/events.js';
import Events from "../components/events.js/index.js"


function MyApp({ Component, pageProps }) {
  return <>
       
            <Events/>
            <Component {...pageProps}/>
           

          </>;
}

export default MyApp;
