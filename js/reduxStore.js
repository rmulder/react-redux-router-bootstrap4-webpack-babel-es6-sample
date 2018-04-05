import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/rootReducer';


// create an object for the default data
const defaultState = {
  isLoggedIn : false
};

const reduxStore = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, reduxStore);

export default reduxStore;
