import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function isLoggedIn(state = [], action) {
  switch(action.type) {
    case 'LOGIN' :
      console.log("LOGIN");
      return true;
    case 'LOGOUT' :
      console.log("LOGOUT");
      return false;
    default:
      return state;
  }
}


const rootReducer = combineReducers({isLoggedIn, routing: routerReducer });

export default rootReducer;
