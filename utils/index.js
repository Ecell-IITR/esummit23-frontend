// import { logSetUser, logSignIn, logSignOut } from "../utils/Analytics";

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};

export const getAuthToken = () => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('authToken');
  return token ? token : false;
};

export const getUserRoleType = () => {
  if (typeof window === 'undefined') return false;
  
  const role = localStorage.getItem('userRoleType');
  return role ? role : false;
};

export const getUserDetails = () => {
  if (typeof window === 'undefined') return false;
  const name = localStorage.getItem('name');
  const id = localStorage.getItem('id');
  return !!(name && id) ? [name, id] : [false, false];
};

export const unAuthenticate = () => {
  if (typeof window === 'undefined') return null;
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  localStorage.removeItem('userRoleType');
  localStorage.removeItem('name');
  localStorage.removeItem('id');
  //   logSetUser(false);
  //   logSignOut();
};

export const Authenticate = (name, id, authToken) => {
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
