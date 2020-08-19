import request from 'superagent';

const URL = 'http://localhost:3000/';

export function signUp(userData) {
  try {
    return request.post(`${URL}auth/signup`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}

export function signIn(userData) {
  try {
    return request.post(`${URL}auth/signin`, userData)
  } catch(e) {
    throw { error: e.message }
  }
}

