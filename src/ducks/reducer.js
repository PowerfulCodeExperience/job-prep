import axios from 'axios';

const initialState = {
  user: {}
};

const GET_USER = 'GET_USER';

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case GET_USER + '_PENDING':
      return state;

    case GET_USER + '_FULFILLED':
      console.log('payload:', action.payload.data);
      return Object.assign({}, state, {user: action.payload.data});

    default: return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/signIn')
  }
}