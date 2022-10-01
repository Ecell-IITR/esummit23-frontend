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

export const TASK_API = `${API_URL}/cap/tasks`;
export const CA_PROFILE_API = `${API_URL}/cap/profile/`;
export const NON_CA_PROFILE_API = `${API_URL}/auth/profile`;
export const CA_LEADERBOARD = `${API_URL}/cap/leaderboard`;
export const Register_API = `${API_URL}/auth/register/`;
export const Login_API = `${API_URL}/auth/login/`;
export const Submission_API = `${API_URL}/cap/verify/submission`;
export const CA_PROFILE_RANK_API = `${API_URL}/cap/rank`;
export const FOOTER_QUERY_API = `${API_URL}/utilities/contact-form/`;
export const EVENT_API = (eventSlug) => `${API_URL}/events/${eventSlug}`;
export const DASHBOARD_EVENT_API = `${API_URL}/dash/eventdashboard/all`;
export const SPEAKERS_API = `${API_URL}/events/speakers`;
export const TEAM_API = `${API_URL}/utilities/team-members/?ordering=-order_id`;
export const ALL_EVENTS_API = `${API_URL}/events/all`;
export const DASHBOARD_EVENT_REGISTER_API = `${API_URL}/dash/eventdashboard/register`;
