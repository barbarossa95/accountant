import React from 'react';

import WalletInfo from './WalletInfo';
import OperationModalForm from './OperationModalForm';

const Header = ({ balance, addOperation }) => {
  return (
    <React.Fragment>
      <WalletInfo balance={balance} />
      <OperationModalForm onSubmit={addOperation} />
    </React.Fragment>
  );
};

export default Header;
