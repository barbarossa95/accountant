import { connect } from 'react-redux';

import { logout } from '../store/actions/user';
import { addOperation } from '../store/actions/operations';

import { getUserName, getBalance } from '../store/selectors';

import MenuBar from '../components/MenuBar';

const mapStateToProps = state => ({
  username: getUserName(state),
  balance: getBalance(state),
});

const mapDispatchToProps = { logout, addOperation };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
