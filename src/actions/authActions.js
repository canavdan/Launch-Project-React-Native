import {
     CREATE_USER_SUCCESS, CREATE_USER_FAILURE, LOGIN_USER_SUCCESS,
     LOG_OUT, SESSION_ERROR, SESSION_LOADING, LOGIN_USER_FAILURE
  } from './types'
  import firebaseService from '../components/enviroments/firebase'

  export const createUserSuccess = (response) => ({
    type: CREATE_USER_SUCCESS,
    payload: response,
})

export const createUserFail = (error) => ({
    type: CREATE_USER_FAILURE,
    payload: error
})

export const loginUserSuccess = (response) => ({
    type: LOGIN_USER_SUCCESS,
    payload: response,
})

export const loginUserFail = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
})

export const loginOut = () => ({
  type: LOG_OUT,
})

export const sessionError = error => ({
  type: SESSION_ERROR,
  payload: error
})
export const sessionLoading = () => ({
  type: SESSION_LOADING
})

export const createUser = (email, password) => dispatch => {
  dispatch(sessionLoading())
firebaseService.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => dispatch(createUserSuccess(response)))
    .catch((error) => dispatch(createUserFail(error)))
}

export const loginUser = (email, pass) => dispatch => {
  dispatch(sessionLoading())
  firebaseService.auth().signInWithEmailAndPassword(email, pass)
    .then((response) => dispatch(loginUserSuccess(response)))
    .catch((error) => dispatch(loginUserFail(error)))
}

export const dispatchLogin = () => ({ type: LOGIN_USER_SUCCESS })


export const logoutUser = () => dispatch => {
  dispatch(sessionLoading())

  firebaseService.auth().signOut().then(() => {
    dispatch(loginOut())
    }).catch(error => {
    dispatch(sessionError(error))
    })
}
  
