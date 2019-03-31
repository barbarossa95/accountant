import { connect } from 'react-redux';

import { addOperation } from '../store/actions/operations';

import Header from '../components/Header';

const mapStateToProps = state => ({ balance: state.operations.balance });

const mapDispatchToProps = { addOperation };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
