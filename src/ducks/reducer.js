import axios from 'axios';

const initialState = {
  user: {},
<<<<<<< HEAD
  companies: [],
  goals: []
};

const GET_USER = 'GET_USER';
const GET_GOALS = 'GET_GOALS';
=======
  resources: [],
  companies: []
};

const GET_USER = 'GET_USER';
const GET_RESOURCES = 'GET_RESOURCES';
>>>>>>> 9a75a600b07daad58fc8ff52020bb6cbffb58f80

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case GET_USER + '_PENDING':
      return state;

    case GET_USER + '_FULFILLED':
<<<<<<< HEAD
      // console.log('payload:', action.payload.data);
=======
      console.log('Got User?', action.payload.data);
>>>>>>> 9a75a600b07daad58fc8ff52020bb6cbffb58f80
      return Object.assign({}, state, {user: action.payload.data});
    case GET_GOALS + '_PENDING':
      return state;
    case GET_GOALS + '_FULFILLED':
      console.log('payload goals:', action.payload.data);
      return Object.assign({}, state, {
        goals: action.payload.data
      })

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
<<<<<<< HEAD
export function getGoals(user) {
  return {
    type: GET_GOALS,
    payload: axios.get('/api/getGoals/', user)
=======

export function getResources(type) {
  return {
    type: GET_RESOURCES,
    payload: axios.get(`/api/resources`)
>>>>>>> 9a75a600b07daad58fc8ff52020bb6cbffb58f80
  }
}