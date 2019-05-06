import React from 'react';

import WalletInfo from './WalletInfo';

import confirm from './UI/Modal';
import CreateOperation from './UI/Forms/CreateOperation';
import Button from './UI/Button';

const Header = ({ balance, addOperation }) => {
  return (
    <React.Fragment>
      <WalletInfo balance={balance} />
      <Button
        className="test"
        onClick={() => {
          confirm(CreateOperation, {
            submitHandler: addOperation,
          });
        }}>
        add
      </Button>
    </React.Fragment>
  );
};

export default Header;
