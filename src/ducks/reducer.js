import axios from 'axios';

const initialState = {
  user: {},
  resources: [],
  companies: [],
  goals: [], 
  weather: []
};

const GET_USER = 'GET_USER';
const GET_RESOURCES = 'GET_RESOURCES';
const GET_GOALS = 'GET_GOALS';
const GET_WEATHER = 'GET_WEATHER'

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
    case GET_GOALS + '_PENDING': 
    // console.log(action.payload)
      return state;
    case GET_GOALS + '_FULFILLED':
      return Object.assign({}, state, {goals: action.payload.data});
    case GET_WEATHER + '_PENDING':
      return state;
    case GET_WEATHER + '_FULFILLED':
    // console.log('weather payload', action.payload)
    return Object.assign({}, state, {weather: action.payload.data});
    default: 
      return state;
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
  export function getGoals(user) {
    return {
      type: GET_GOALS,
      payload: axios.get('/api/getGoals')
    }
  }
  export function getWeather() {
    console.log('action')
    return {
      type: GET_WEATHER,
      payload: axios.get('/api/getWeather')
    }
  }
  
  


