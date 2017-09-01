import axios from 'axios';

const initialState = {
  user: {},
  resources: [],
  companies: []
};

const GET_USER = 'GET_USER';
const GET_RESOURCES = 'GET_RESOURCES';

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case GET_USER + '_PENDING':
      return state;

    case GET_USER + '_FULFILLED':
      console.log('Got User?', action.payload.data);
      return Object.assign({}, state, {user: action.payload.data});

    case GET_RESOURCES + '_PENDING':
      return state;

    case GET_RESOURCES + '_FULFILLED':
      return Object.assign({}, state, {resources: action.payload.data});

    default: return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/signIn')
  }
}

export function getResources(type) {
  return {
    type: GET_RESOURCES,
    payload: axios.get(`/api/resources`)
  }
}