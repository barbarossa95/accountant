import React from 'react';

import WalletInfo from './WalletInfo';

import confirm from './UI/Modal';
import CreateOperation from './CreateOperation';
import Button from './UI/Button';

const Header = ({ balance, addOperation, logout }) => {
  return (
    <React.Fragment>
      <Button className="logout" onClick={logout}>
        Выйти
      </Button>
      <WalletInfo balance={balance} />
      <Button
        className="test"
        onClick={() => {
          confirm(CreateOperation, {
            submitHandler: addOperation,
          });
        }}>
        Добавить
      </Button>
    </React.Fragment>
  );
};

export default Header;
