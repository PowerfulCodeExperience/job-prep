import axios from 'axios';

const initialState = {
  user: {},
  resources: [],
  companies: []
};

const GET_USER = 'GET_USER';
const GET_RESOURCES = 'GET_RESOURCES';
const GET_COMPANIES = 'GET_COMPANIES';

const POST_COMPANY = 'POST_COMPANY';

const SIGN_OUT = 'SIGN_OUT';


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

    case POST_COMPANY + '_PENDING':
      return state;

    case POST_COMPANY + '_FULFILLED':
      return state;

    default: return state;
  }
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/signIn')
  }
}

export function signOut() {
  return{
    type: SIGN_OUT,
    payload: axios.get('/api/signOut')
  }
}

export function getResources(type) {
  return {
    type: GET_RESOURCES,
    payload: axios.get(`/api/resources`)
  }
}

export function getCompanies() {
  return {
    type: GET_COMPANIES,
    payload: axios.get('/api/company')
  }
}

export function postCompany(company) {
  return {
    type: POST_COMPANY,
    payload: axios.post('/api/company', company)
  }
}