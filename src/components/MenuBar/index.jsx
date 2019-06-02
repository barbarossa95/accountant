import React from 'react';
import PropTypes from 'prop-types';

import CreateOperation from '../CreateOperation';
import confirm from '../UI/Modal';
import Button from '../UI/Button';

import { moneyFormat } from '../../helpers/functions';

import './MenuBar.scss';

const MenuBar = ({ username, balance, addOperation, logout }) => {
  return (
    <nav>
      <ul>
        <li className="info">
          <span>@{username}:</span>
          &nbsp;
          <strong>{moneyFormat(balance)}</strong>
        </li>
        <li>
          <Button
            className="success"
            onClick={() => {
              confirm(CreateOperation, {
                submitHandler: addOperation,
              });
            }}>
            Добавить
          </Button>
        </li>
        <li>
          <Button className="logout error" onClick={logout}>
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
};

export default MenuBar;
