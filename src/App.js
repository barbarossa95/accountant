import React, { Component } from 'react';

import TimeTable from './containers/TimeTable';
import Wallet from './containers/Wallet';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Wallet />
        <TimeTable />
      </React.Fragment>
    );
  }
}

export default App;
