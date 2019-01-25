import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import {
  INCREMENT,
  ADD_COUNTER,
  RESET,
  DELETE,
  BLOCKED,
  ADD_USER,
  INITIALIZE_STATE,
} from './actions'
import { registerUser, saveCounterStateLocalStorage } from './services'

let initialState = { user: '', counters: [] }

const reducer = (state = initialState, action) => {
  let counter = state.counters.find(counter => counter.counterId === action.id) //Finds the first item(this case an object) in the array that matches the condition card.counterId === action.id
  let index = state.counters.indexOf(counter)

  switch (action.type) {
    case INITIALIZE_STATE:
      return Object.assign({}, state, action.newState)
    case INCREMENT:
      let newValue = [...state.counters] //This makes a copy of the couters array
      newValue[index].value += 1
      saveCounterStateLocalStorage(newValue, index)
      return Object.assign({}, state, {
        counters: newValue,
      })
    case BLOCKED:
      let blockedValue = [...state.counters] //This makes a copy of the couters array
      blockedValue[index].blocked = !blockedValue[index].blocked
      saveCounterStateLocalStorage(blockedValue, index)
      return Object.assign({}, state, {
        counters: blockedValue,
      })
    case ADD_COUNTER:
      let getUsers = JSON.parse(localStorage.getItem('countersApp'))
      const selectedUser = getUsers.find(
        userObj => userObj.user === JSON.parse(sessionStorage.getItem('user')).username
      )
      const userCounters = selectedUser.counters
      userCounters.push(action.newCounter)
      const userIndex = getUsers.indexOf(selectedUser)
      getUsers[userIndex].counters = selectedUser.counters
      localStorage.setItem('countersApp', JSON.stringify(getUsers))
      return Object.assign({}, state, {
        counters: [...state.counters, action.newCounter],
      })
    case ADD_USER:
      let countersApp = []
      const newUser = { user: action.newUser.username, counters: [] }
      // Login
      getUsers = JSON.parse(localStorage.getItem('countersApp'))
      if (getUsers === null) {
        countersApp.push(newUser)
        localStorage.setItem('countersApp', JSON.stringify(countersApp))
      }
      const user = JSON.parse(localStorage.getItem('countersApp')).find(
        userObj => userObj.user === action.newUser.username
      )
      if (user == null) {
        // Register the user on localStorage
        registerUser(newUser)
      }
      return Object.assign({}, state, {
        user: action.newUser.username,
      })
    case DELETE:
      let newCounters = [...state.counters]
      newCounters.splice(index, 1)
      return Object.assign({}, state, {
        counters: newCounters,
      })
    case RESET:
      let resetValue = [...state.counters]
      resetValue[index].value = 0
      saveCounterStateLocalStorage(resetValue, index)
      return Object.assign({}, state, {
        counters: resetValue,
      })
    default:
      return state
  }
}

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
