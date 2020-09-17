import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import GenPins from './components/GenPins'

type ReduxStoreType = {
  pins: object[]
}

const rootReducer = combineReducers({
  addPins: (state: ReduxStoreType = { pins: [] }, { type, pins }) => {
    if (type === 'addPins') {
      const newState = { pins: [...state.pins, pins] }
      return newState
    }
    return state
  },
})

//const initialStore: ReduxStoreType = { pins: [{}] }
const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <GenPins />
    </Provider>
  )
}

export default App
