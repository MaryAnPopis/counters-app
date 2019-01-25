import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { INCREMENT, ADD_COUNTER, RESET, DELETE, BLOCKED } from './actions'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let initialState = { counters: [{ counterId: 1, name: 'test', value: 20 }] }

const reducer = (state = initialState, action) => {
  let counter = state.counters.find(counter => counter.counterId === action.id) //Finds the first item(this case an object) in the array that matches the condition card.counterId === action.id
  let index = state.counters.indexOf(counter)

  switch (action.type) {
    case INCREMENT:
      let newValue = [...state.counters] //This makes a copy of the couters array
      newValue[index].value += 1
      return Object.assign({}, state, {
        counters: newValue,
      })
    case BLOCKED:
      let blockedValue = [...state.counters] //This makes a copy of the couters array
      blockedValue[index].blocked = !blockedValue[index].blocked
      return Object.assign({}, state, {
        counters: blockedValue,
      })
    case ADD_COUNTER:
      return Object.assign({}, state, {
        counters: [...state.counters, action.newCounter],
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
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
