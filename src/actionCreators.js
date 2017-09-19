import { ADD_FLIGHTS_DATA, SET_CARRIER } from './actions'

export function setCarrier (carrier) {
  return { type: SET_CARRIER, payload: carrier }
}

function addFlightsData (flights) {
  return { type: ADD_FLIGHTS_DATA, payload: flights }
}

export function fetchFlightsData () {
  return function (dispatch, getState) {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        dispatch(addFlightsData(data.flights));
      })
  }
}
