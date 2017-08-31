import axios from 'axios';

const initialState = {
  user: {},
  goals: []
};

const GET_USER = 'GET_USER';
const GET_GOALS = 'GET_GOALS';

export default function reducer(state=initialState, action) {
  switch(action.type) {

    case GET_USER + '_PENDING':
      return state;

    case GET_USER + '_FULFILLED':
      // console.log('payload:', action.payload.data);
      return Object.assign({}, state, {user: action.payload.data});
    case GET_GOALS + '_PENDING':
      return state;
    case GET_GOALS + '_FULFILLED':
      console.log('payload goals:', action.payload.data);
      return Object.assign({}, state, {
        goals: action.payload.data
      })

    default: return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/signIn')
  }
}
export function getGoals(user) {
  return {
    type: GET_GOALS,
    payload: axios.get('/api/getGoals/', user)
  }
}