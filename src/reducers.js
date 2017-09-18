import { ADD_FLIGHTS_DATA } from './actions'
import { getCarriers } from './utils'

const DEFAULT_STATE = {
  selectedCarrier: null,
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

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_FLIGHTS_DATA:
      return addFlightData(state, action)
    default:
      return state
  }
}

export default rootReducer
