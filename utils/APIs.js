export let API_URL;
if (process.env.ENV === 'prod') {
  API_URL = 'https://api.esummit.in';
} else {
  API_URL = 'http://localhost:8000'; // Change this to your local API URL
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
export const REGISTER_API = `${API_URL}/user/signup`;
export const ALL_EVENTS_API = `${API_URL}/events/all`;

