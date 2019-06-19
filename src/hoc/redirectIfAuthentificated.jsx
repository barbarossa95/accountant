import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserToken } from '../store/selectors';
import { push } from 'connected-react-router';
import { PAGE_HOME } from '../helpers/constants';

export function redirectIfAuthentificated(WrappedComponent) {
  class RedirectWrapper extends Component {
    componentDidMount() {
      if (this.props.token) this.props.push(PAGE_HOME);
    }

    componentDidUpdate(nextProps) {
      if (this.props.token) this.props.push(PAGE_HOME);
    }

    render() {
      return <WrappedComponent />;
    }
  }

  return connect(
    state => ({
      token: getUserToken(state),
    }),
    { push }
  )(RedirectWrapper);
}
