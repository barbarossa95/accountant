import React, { Component } from 'react';

import WalletInfo from '../components/WalletInfo';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10.3,
    };
  }

  render() {
    const { balance } = this.state;
    return <WalletInfo balance={balance} />;
  }
}

export default Wallet;
