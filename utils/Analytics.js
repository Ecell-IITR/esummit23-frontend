import ReactGA from 'react-ga4';
import config from '../config';
import { isLocalHost, isStagingHost } from '../utils';

const USER_DEFAULT_ID = -1;

export const initializeGA = (initialUser) => {
  const trackingId =
    isLocalHost() || isStagingHost()
      ? 'DO_NOT_TRACK_LOCALHOST'
      : config.GOOGLE_ANALYTICS_ID;

  ReactGA.initialize(trackingId, {
    gaOptions: {
      userId: initialUser ? initialUser.id : USER_DEFAULT_ID, // default ID
    },
  });
  
};

export const logSetUser = (user) => {
  if (user) {
    
    ReactGA.set({
      userId: user.id,
      
    });
  } else {

    ReactGA.set({
      userId: USER_DEFAULT_ID,
    });
  }
};

// PageView
export const logPageView = (pathname) => {
 
  ReactGA.set({ page: pathname }); // Update the user's current page
  ReactGA.pageview(pathname, [], pathname); // Record a pageview for the given page


};


export const logAttemptSignIn = () => {

  ReactGA.event({
    category: 'Authentication',
    action: 'Attempt Sign In',
    label: 'Attempt Sign In',
  });
};

export const logSignIn = () => {

  ReactGA.event({
    category: 'Authentication',
    action: 'Signed In',
    label: 'Signed In',
  });
};

// Sign Up
export const logAttemptSignUp = () => {

  ReactGA.event({
    category: 'Authentication',
    action: 'Attempt Sign Up',
    label: 'Attempt Sign Up',
  });
};
