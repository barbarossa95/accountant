import { connect } from 'react-redux';

import { addOperation } from '../store/actions/operations';
import { logout } from '../store/actions/user';

import Header from '../components/Header';

const mapStateToProps = state => ({ balance: state.operations.balance });

const mapDispatchToProps = { addOperation, logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
