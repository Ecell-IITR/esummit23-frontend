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
  console.log('Initializing google analytics');

  // const advancedMatching = {};
  // const options = {
  //   autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  //   debug: false, // enable logs
  // };

  // ReactPixel.init("149387270540577", advancedMatching, options);

  // should ask user to allow cookies
  // const disabled = false;
  // LinkedInTag.init("3386980", "dc", disabled);
};

export const logSetUser = (user) => {
  if (user) {
    // console.log("Setting User:", user);
    ReactGA.set({
      userId: user.id,
      // any data that is relevant to the user session
      // that we would like to track with google analytics
      // in total: 25 extra parameters allowed
    });
  } else {
    // console.log("Setting Null User.");
    // default ID for
    // non-logged in users
    ReactGA.set({
      userId: USER_DEFAULT_ID,
    });
  }
  // console.log("Setting user");
};

// PageView
export const logPageView = (pathname) => {
  // console.log("PageView:", pathname);
  ReactGA.set({ page: pathname }); // Update the user's current page
  ReactGA.pageview(pathname, [], pathname); // Record a pageview for the given page

  // for Pixel, track packages
  /* if (pathname.includes("/package")) {
      ReactPixel.pageView();
    }*/
};

// Sign In
export const logAttemptSignIn = () => {
  // console.log("Attempting Sign In");
  ReactGA.event({
    category: 'Authentication',
    action: 'Attempt Sign In',
    label: 'Attempt Sign In',
  });
};

export const logSignIn = () => {
  // console.log("Signed In");
  ReactGA.event({
    category: 'Authentication',
    action: 'Signed In',
    label: 'Signed In',
  });
};

// Sign Up
export const logAttemptSignUp = () => {
  // console.log("Attempting Sign Up");
  ReactGA.event({
    category: 'Authentication',
    action: 'Attempt Sign Up',
    label: 'Attempt Sign Up',
  });
};
