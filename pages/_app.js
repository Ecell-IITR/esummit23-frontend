import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileProvider from '../utils/MobileContext';

import { AuthContext } from '../utils/auth-context';
import { isAuthenticated } from '../utils';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../seo.config';
import Script from 'next/script';
import config from '../config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContext.Provider value={{ user: isAuthenticated() }}>
        <MobileProvider>
          <DefaultSeo {...defaultSEOConfig} />
          <ToastContainer />
          <Script
            strategy='lazyOnload'
            src={`"https://www.googletagmanager.com/gtag/js?id=${config.GOOGLE_ANALYTICS_ID}"`}
          />
          <Script id='initialize-gtag' strategy='lazyOnload'>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.GOOGLE_ANALYTICS_ID}');
           `}
          </Script>

          <Component {...pageProps} />
        </MobileProvider>
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
