import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CreateOperation from '../CreateOperation';
import confirm from '../UI/Modal';
import Button from '../UI/Button';

import { moneyFormat } from '../../helpers/functions';

import './MenuBar.scss';

const MenuBar = ({ username, balance, addOperation, logout, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, fetchUser);

  return (
    <nav>
      <ul>
        <li className="info">
          <span>@{username}:</span>
          &nbsp;
          <strong>{moneyFormat(balance)}</strong>
        </li>
        <li className="controls">
          <Button
            className="success add-operation"
            onClick={() => {
              confirm(CreateOperation, {
                submitHandler: addOperation,
              });
            }}>
            Добавить
          </Button>
          <Button className="error logout" onClick={logout}>
            Выйти
          </Button>
        </li>
      </ul>
    </nav>
  );
};

MenuBar.propTypes = {
  username: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  addOperation: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default MenuBar;
