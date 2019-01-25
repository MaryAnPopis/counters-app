export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'
export const DELETE = 'DELETE'
export const ADD_COUNTER = 'ADD_COUNTER'
export const BLOCKED = 'BLOCKED'

export const increment = id => {
  return {
    type: INCREMENT,
    id,
  }
}
export const blocked = id => {
  return {
    type: BLOCKED,
    id,
  }
}

export const deleteCounter = id => {
  return {
    type: DELETE,
    id,
  }
}
export const reset = id => {
  return {
    type: RESET,
    id,
  }
}
export const add_counter = () => {
  return {
    type: ADD_COUNTER,
  }
}
