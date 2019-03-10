import React from 'react';
import PropTypes from 'prop-types';

import './OperationListItem.css';

import { moneyFormat, operationName } from '../../helpers/functions';

const OperationListItem = props => {
  const { type, amount, description } = props;

  return (
    <div>
      <span>Operation: {operationName(type)}</span>
      <span>Amount: {moneyFormat(amount)}</span>
      <span>{description || ''}</span>
    </div>
  );
};

OperationListItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default OperationListItem;
