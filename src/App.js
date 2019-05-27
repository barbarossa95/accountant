import React, { Component } from 'react';

import Login from './containers/Login';
import Header from './containers/Header';
import TimeTable from './containers/TimeTable';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
        <Header />
        <TimeTable />
      </React.Fragment>
    );
  }
}

export default App;
