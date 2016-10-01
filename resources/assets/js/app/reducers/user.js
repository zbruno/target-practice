import Immutable from 'immutable';

import { RECEIVE_USER } from '../actions/user';

export default function user(state = Immutable.Map(), action) {
  switch (action.type) {
    case RECEIVE_USER:
      return Immutable.fromJS(action.user);
    default:
      return state;
  }
}
