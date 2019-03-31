import React from 'react';
import PropTypes from 'prop-types';

import './OperationListItem.scss';

import {
  moneyFormat,
  operationName,
  operationCssClass,
} from '../../helpers/functions';

const OperationListItem = ({ type, amount, description }) => {
  return (
    <div className={`operation-list_item ${operationCssClass(type)}`}>
      <div className="item_row">
        <span className="type">
          <strong>Операция: </strong>
          {operationName(type)}
        </span>
        &nbsp;
        <span className="amount">
          <strong>Сумма: </strong>
          {moneyFormat(amount)}
        </span>
      </div>
      {description ? (
        <div className="item_row">
          <span className="description">
            <strong>Описание: </strong>
            {description}
          </span>
        </div>
      ) : null}
    </div>
  );
};

OperationListItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default OperationListItem;
