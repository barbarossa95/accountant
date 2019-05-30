import { connect } from 'react-redux';

import { login } from '../store/actions/user';
import { getLoginMessage, getLoginLoading } from '../store/selectors';

import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
  loginMessage: getLoginMessage(state),
  loginLoading: getLoginLoading(state),
});

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
