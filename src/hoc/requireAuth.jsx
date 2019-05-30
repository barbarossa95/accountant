import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { getAccessToken } from '../store/selectors';

import { PAGE_LOGIN } from '../helpers/constants';

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

      if (!token) {
        this.redirectTo(PAGE_LOGIN);
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
      token: getAccessToken(state),
    }),
    { push }
  )(WithAuthWrapper);
}
