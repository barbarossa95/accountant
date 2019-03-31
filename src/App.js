import React, { Component } from 'react';

import Header from './containers/Header';
import TimeTable from './containers/TimeTable';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TimeTable />
      </React.Fragment>
    );
  }
}

export default App;
