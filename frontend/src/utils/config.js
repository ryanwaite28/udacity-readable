export const baseUrl = window.location.origin;
export const headers = { 
    'Authorization': 'auth', 
    'Content-Type': 'application/json'
};
export const uuid = require('uuid/v1');
export function getCred () {
  return (window.location.origin === process.env.REACT_APP_BACKEND) ? 'include' : true;
}
