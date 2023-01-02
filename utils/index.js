// import { logSetUser, logSignIn, logSignOut } from "../utils/Analytics";

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : null;
  const token = localStorage.getItem('authToken');
  return !!(user && token) ? { user } : false;
};

export const getAuthToken = () => {
  if (typeof window === 'undefined') return false;
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : null;
  const token = localStorage.getItem('authToken');
  return !!(user && token) ? token : false;
};

export const getUserRoleType = () => {
  if (typeof window === 'undefined') return false;
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : null;
  const token = localStorage.getItem('authToken');
  const role = localStorage.getItem('userRoleType');
  return !!(user && token && role) ? role : false;
};

export const getUserDetails = () => {
  if (typeof window === 'undefined') return false;
  const name = localStorage.getItem('name');
  const id = localStorage.getItem('id');
  return !!(name && id) ? [name,id] : false;
}; 

export const unAuthenticate = () => {
  if (typeof window === 'undefined') return null;
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  localStorage.removeItem('userRoleType');
  //   logSetUser(false);
  //   logSignOut();
};

export const Authenticate = (name,id, authToken) => {
  if (typeof window === 'undefined') return null;
  
  localStorage.setItem('name', name);
  localStorage.setItem('id', id);
  localStorage.setItem('authToken', authToken);
  //   logSetUser(user);
  //   logSignIn();
};

export const UpdateUserData = (field, value) => {
  const user = isAuthenticated();
  if (user) {
    user[field] = value;
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const isLocalHost = (hostname) => {
  let host = hostname;
  if (typeof window !== 'undefined') host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' ? true : false;
};

export const isStagingHost = (hostname) => {
  let host = hostname;
  if (typeof window !== 'undefined') host = window.location.hostname;
  return host === 'new.esummit.in' ? true : false;
};
