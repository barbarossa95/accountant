import React from 'react';

import WalletInfo from './WalletInfo';

import confirm from './UI/Modal';
import CreateOperation from './UI/Forms/CreateOperation';

const Header = ({ balance, addOperation }) => {
  return (
    <React.Fragment>
      <WalletInfo balance={balance} />

      <button
        onClick={() => {
          confirm(CreateOperation, {
            submitHandler: addOperation,
          });
        }}>
        add
      </button>
    </React.Fragment>
  );
};

export default Header;
