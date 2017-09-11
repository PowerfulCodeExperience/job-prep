import axios from 'axios';

const initialState = {
  user: false,
  resources: [],
  companies: [],
  contacts: [],
  email: '',
  note: '',
  allContacts: []
};

const GET_USER = 'GET_USER';
const GET_RESOURCES = 'GET_RESOURCES';
const GET_COMPANIES = 'GET_COMPANIES';
const GET_CONTACTS = 'GET_CONTACTS';
const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';

const POST_COMPANY = 'POST_COMPANY';
const POST_CONTACT = 'POST_CONTACT';
const POST_EMAIL = 'POST_EMAIL';
const POST_NOTE = 'POST_NOTE';

const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_NOTE = 'UPDATE_NOTE';
const UPDATE_APPLIED = 'UPDATE_APPLIED';

const SIGN_OUT = 'SIGN_OUT';


export default function reducer(state=initialState, action) {
  switch(action.type) {

    case GET_USER + '_PENDING':
      return state;

    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {user: action.payload.data});

    case GET_RESOURCES + '_PENDING':
      return state;

    case GET_RESOURCES + '_FULFILLED':
      return Object.assign({}, state, {resources: action.payload.data});

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
        contacts: action.payload.data,
        email: ''
      })

    case POST_NOTE + '_PENDING':
      return state;

    case POST_NOTE + '_FULFILLED':
      console.log("action", action.payload.data)
      return Object.assign({}, state, {
        note: ''
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

    case UPDATE_NOTE:
      return Object.assign({}, state, {
        note: action.payload
      })

    case UPDATE_APPLIED + '_PENDING':
      return state;

    case UPDATE_APPLIED + '_FULFILLED':
      return Object.assign({}, state, {
        contacts: action.payload.data
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

export function postNote(note, date, contact_id, company_id){
  console.log("note", note, date, contact_id, company_id)
  return {
    type: POST_NOTE,
    payload: axios.put('/api/note', {note, date, contact_id, company_id})
  }
}

export function updateNote(note){
  return {
    type: UPDATE_NOTE,
    payload: note
  }
}

export function updateApplied(applied, id){
  return {
    type: UPDATE_APPLIED,
    payload: axios.put('/api/applied', {applied, id})
  }
}