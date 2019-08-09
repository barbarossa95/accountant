import { connect } from 'react-redux';

import { fetchUser, logout } from '../store/actions/user';
import { addOperation } from '../store/actions/operations';

import {
  getUserName,
  getBalance,
  getIsAddingOperation,
} from '../store/selectors';

import MenuBar from '../components/MenuBar';

const mapStateToProps = state => ({
  username: getUserName(state),
  balance: getBalance(state),
  isAddingOperation: getIsAddingOperation(state),
});

const mapDispatchToProps = { fetchUser, logout, addOperation };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
