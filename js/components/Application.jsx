import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main.jsx';

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Application = connect(mapStateToProps, mapDispachToProps)(Main);

export default Application;
