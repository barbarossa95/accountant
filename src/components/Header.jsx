import React from 'react';

import WalletInfo from './WalletInfo';

import confirm from './UI/Modal';
import CreateOperation from './CreateOperation';
import Button from './UI/Button';

const Header = ({ balance, addOperation, logout }) => {
  return (
    <React.Fragment>
      <Button className="logout error" onClick={logout}>
        Выйти
      </Button>
      <WalletInfo balance={balance} />
      <Button
        className="success"
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
