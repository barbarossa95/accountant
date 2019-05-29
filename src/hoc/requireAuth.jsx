import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { getToken } from '../store/selectors';

export function requireAuth(WrappedComponent) {
  class WithAuthWrapper extends Component {
    componentDidMount() {
      this.chechAuth();
    }

    componentDidUpdate(nextProps) {
      this.chechAuth();
    }

    chechAuth() {
      const { token } = this.props;

      console.log('token');
      console.log(token);

      if (!token) {
        this.redirectTo('/login');
      }
    }

    redirectTo(page) {
      const { push } = this.props;

      push(page);
    }

    render() {
      return <WrappedComponent />;
    }
  }

  return connect(
    state => ({
      token: getToken(state),
    }),
    { push }
  )(WithAuthWrapper);
}
