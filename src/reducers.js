import { ADD_FLIGHTS_DATA, SET_CARRIER } from './actions'
import { getCarriers } from './utils'

const DEFAULT_STATE = {
  selectedCarrier: window.location.hash.slice(1),
  flights: [],
  carriers: []
}

function addFlightData (state, action) {
  const carriers = getCarriers(action.payload);

  return {
    ...state,
    carriers,
    flights: action.payload
  }
}

function setCarrier(state, action) {
  window.location.hash = action.payload

  return {
    ...state,
    selectedCarrier: action.payload
  }
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_FLIGHTS_DATA:
      return addFlightData(state, action)
    case SET_CARRIER:
      return setCarrier(state, action)
    default:
      return state
  }
}

export default rootReducer
