/* eslint-disable no-throw-literal */
import request from 'superagent';

const URL = 'https://evening-coast-54434.herokuapp.com/';

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


export function fetchList() {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .get(`${URL}api/ToDos`)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function makeToDo(toDoData) {
  const token = localStorage.getItem('TOKEN')
  console.log(toDoData)
  try {
    return request
              .post(`${URL}api/ToDos`, toDoData)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function changeToDo(completedToDo) {
  const token = localStorage.getItem('TOKEN')
  try {
    return request
              .put(`${URL}api/ToDos`, completedToDo)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}

export function deleteTodo(todoId) {
  const token = localStorage.getItem('TOKEN')

  try {
    return request
              .delete(`${URL}api/toDos`, todoId)
              .set('Authorization', token)
  } catch(e) {
    throw { error: e.message }
  }
}