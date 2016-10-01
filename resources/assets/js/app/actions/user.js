import getRequest from '../utils/request';
import getRequestHeader from '../utils/getRequestHeader';

export const REQUEST_USER = 'REQUEST_USER';
function requestUser() {
  return {
    type: REQUEST_USER,
  };
}

export const RECEIVE_USER = 'RECEIVE_USER';
function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user,
  };
}

export function fetchUser() {
  return dispatch => {
    dispatch(requestUser());
    const headers = getRequestHeader();
    return getRequest('get', '/api/user', {}, headers)
      .then(
        res => dispatch(receiveUser(res)),
        err => console.log(err)
      );
  };
}
