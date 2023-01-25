export let API_URL;
if (process.env.ENV === 'prod') {
  API_URL = 'https://api.esummit.in';
} else {
  API_URL = 'https://api.esummit.in'; // Change this to your local API URL
}

export let HOST_URL;
if (process.env.ENV === 'prod') {
  HOST_URL = 'https://www.esummit.in';
} else {
  HOST_URL = 'http://localhost:3000';
}

export const FOOTER_QUERY_API = `${API_URL}/user/querry`;
export const EVENT_API = (eventSlug) => `${API_URL}/events/${eventSlug}`;
export const DASHBOARD_EVENT_API = `${API_URL}/dash/eventdashboard/all`;
export const SPEAKERS_API = `${API_URL}/events/speakers`;
export const LOGIN_API = `${API_URL}/user/login`;
export const TEAM_REGISTER_API = `${API_URL}/user/team_signup`;
export const NEW_TEAM_REGISTER_API = `${API_URL}/user/team_signup/new`;
export const REGISTER_API = `${API_URL}/user/signup`;
export const ALL_EVENTS_API = `${API_URL}/events/all`;
export const USER_SERVICES_API = `${API_URL}/user/services`;
export const OTP_API = `${API_URL}/user/otp`;
export const VERIFY_API = `${API_URL}/user/verify`;
export const CAP_DASH_API = `${API_URL}/cap/leaderboard`;
export const CAP_TASK_API = `${API_URL}/cap/taskassigned`;
export const CAP_SUB_API = `${API_URL}/cap/submission`;
export const SINGLE_SERVICES = `${API_URL}/events/services/single`;
export const SPEAKER_DETAIL_API = `${API_URL}/public/speakers`;
export const USER_CAP_DETAILS_API = `${API_URL}/cap/usercapdetails`;
export const RAZORPAY_GET_ORDER_ID = `${API_URL}/ticket/razorpay`;
export const RAZORPAY_CALLBACK = `${API_URL}/ticket/razorpay/callback`;
export const OTP_SIGNUP_API = `${API_URL}/user/otp_signup`;
export const OTP_SIGNUP_VERIFY_API = `${API_URL}/user/otp_signup/verify`;
