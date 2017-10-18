import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios'

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

// export const RECEIVE_AIRCRAFT='RECEIEVE_AIRCRAFT'

// export function receieveAircraft(aircraft){
//   return {
//     type: RECEIVE_AIRCRAFT,
//     aircraft
//   }
// }

// //thunk
// export function fetchAllAircraft(){
//   return function(dispatch) {
//     axios.get('api/aircraft')
//     .then(res => res.data)
//     .then(aircraft=> {
//       dispatch(receieveAircraft(aircraft))
//     })
//   }
// }
