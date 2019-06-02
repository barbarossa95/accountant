import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkAuth } from '../store/actions/user';

export function requireAuth(WrappedComponent) {
  class WithAuthWrapper extends Component {
    componentDidMount() {
      this.props.checkAuth();
    }

    componentDidUpdate(nextProps) {
      this.props.checkAuth();
    }

    render() {
      return <WrappedComponent />;
    }
  }

  return connect(
    null,
    { checkAuth }
  )(WithAuthWrapper);
}
