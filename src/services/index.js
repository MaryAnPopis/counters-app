export function registerUser(newUser) {
  let countersApp = []
  const getlocalStorage = getLocalStorageItems()
  if (getlocalStorage === null) {
    countersApp.push(newUser)
    setToLocalStorage(countersApp)
  } else {
    countersApp = getlocalStorage
    countersApp.push(newUser)
    setToLocalStorage(countersApp)
  }
}

export function saveCounterStateLocalStorage(newValue, index) {
  const getlocalStorage = getLocalStorageItems()

  const currentUser = getlocalStorage.find(
    userObj => userObj.user === JSON.parse(sessionStorage.getItem('user')).username
  )
  const counter = currentUser.counters.find(
    counter => counter.counterId === newValue[index].counterId
  )
  const counterIndex = currentUser.counters.indexOf(counter)
  currentUser.counters[counterIndex] = newValue[index]
  setToLocalStorage(getlocalStorage)
}

function getLocalStorageItems() {
  return JSON.parse(localStorage.getItem('countersApp'))
}

function setToLocalStorage(countersApp) {
  localStorage.setItem('countersApp', JSON.stringify(countersApp))
}
