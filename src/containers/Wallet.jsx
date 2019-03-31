import React, { Component } from 'react';

import WalletInfo from '../components/WalletInfo';
import OperationModalForm from '../components/OperationModalForm';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10.3,
    };
  }

  render() {
    const { balance } = this.state;
    return (
      <React.Fragment>
        <WalletInfo balance={balance} />
        <OperationModalForm
          onSubmitHandler={operation => console.log(operation)}
        />
      </React.Fragment>
    );
  }
}

export default Wallet;
