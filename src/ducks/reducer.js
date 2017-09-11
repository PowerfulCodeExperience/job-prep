import axios from 'axios';

const initialState = {
  user: false,
  resources: [],
  companies: [],
  goals: [],
  // tasks: [],
  contacts: [],
  email: '',
  allContacts: [], 
  profile: []
};

const GET_USER = 'GET_USER';
const GET_RESOURCES = 'GET_RESOURCES';

const GET_GOALS = 'GET_GOALS';
const POST_GOAL = 'POST_GOAL';

const GET_COMPANIES = 'GET_COMPANIES';
const GET_CONTACTS = 'GET_CONTACTS';
const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';

const POST_COMPANY = 'POST_COMPANY';
const POST_CONTACT = 'POST_CONTACT';
const POST_EMAIL = 'POST_EMAIL';

const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

const POST_PROFILE = 'POST_PROFILE';
const GET_PROFILE = 'GET_PROFILE';

const SIGN_OUT = 'SIGN_OUT';


export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_USER + '_PENDING':
      return state;
    case GET_USER + '_FULFILLED':
      console.log('User:', action.payload.data);
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
    case POST_GOAL + '_PENDING':
      return state;
    case POST_GOAL + '_FULFILLED':
      return Object.assign({}, state, {
        goals: [...action.payload.data]
      });

    case GET_COMPANIES + '_PENDING':
      return state;

    case GET_COMPANIES + '_FULFILLED':
      console.log("Companies:", action.payload.data);
      return Object.assign({}, state, {
        companies: [...action.payload.data]
      })

    case GET_CONTACTS + '_PENDING':
      return state;
    
    case GET_CONTACTS + '_FULFILLED':
      return Object.assign({}, state, {
        contacts: [...action.payload.data]
      })

    case GET_ALL_CONTACTS + '_PENDING':
      return state;

    case GET_ALL_CONTACTS + '_FULFILLED':
      return Object.assign({}, state, {
        allContacts: action.payload.data
      })

    case POST_COMPANY + '_PENDING':
      return state;

    case POST_COMPANY + '_FULFILLED':
      return Object.assign({}, state, {
        companies: [...action.payload.data]
      })

    case POST_CONTACT + '_PENDING':
      return state;

    case POST_CONTACT + '_FULFILLED':
      return Object.assign({}, state, {
        contacts: [...action.payload.data]
      })

    case POST_EMAIL + '_PENDING':
      return state;

    case POST_EMAIL + '_FULFILLED':
      console.log("email posted", action.payload.data)
      return Object.assign({}, state, {
        contacts: action.payload.data
      })

    case UPDATE_STATUS + '_PENDING':
      return state;

    case UPDATE_STATUS + '_FULFILLED':
      return Object.assign({}, state, {
        contacts: action.payload.data
      })

    case UPDATE_EMAIL:
      console.log("action", action.payload)
      return Object.assign({}, state, {
        email: action.payload
      })
    case POST_PROFILE + '_PENDING':
      return state;

    case POST_PROFILE + '_FULFILLED':
      return Object.assign({}, state, {
        profile: [...action.payload.data]
      })
    case GET_PROFILE + '_PENDING':
      return state;
    case GET_PROFILE + '_FULFILLED':
      return Object.assign({}, state, {
        profile: action.payload.data
      })
    case SIGN_OUT + '_PENDING':
      return state;

    case SIGN_OUT + '_FULFILLED':
      return Object.assign({}, state, {
        user: false
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
      payload: axios.get('/api/getGoals')
    }
  }
  export function postGoal(goal) {
    return {
      type: POST_GOAL,
      payload: axios.post('/api/postGoal', {goal})
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

export function getContacts(id){
  return {
    type: GET_CONTACTS,
    payload: axios.get(`/api/getContacts/${id}`)
  }
}

export function getAllContacts() {
  return {
    type: GET_ALL_CONTACTS,
    payload: axios.get('/api/allContacts')
  }
}

export function postCompany(company) {
  return {
    type: POST_COMPANY,
    payload: axios.post('/api/company', company)
  }
}

export function postContact(contact){
  return {
    type: POST_CONTACT,
    payload: axios.post('/api/contact', contact)
  }
}

export function updateStatus(id, status, date, company_id){
  return {
    type: UPDATE_STATUS,
    payload: axios.put('/api/status', { id, status, date, company_id })
  }
}
export function updateEmail(email){
  return {
    type: UPDATE_EMAIL,
    payload: email.target.value
  }
}

export function postEmail(email, id, company_id){
  return {
    type: POST_EMAIL,
    payload: axios.put('/api/email', {email, id, company_id})
  }
}
export function postProfile(linked, resume, portfolio) {
  return {
    type: POST_PROFILE,
    payload: axios.post('/api/postProfile', {linked, resume, portfolio})
  }
}
export function getProfile(user) {
  return {
    type: GET_PROFILE,
    payload: axios.get('/api/getProfile')
  }
}
