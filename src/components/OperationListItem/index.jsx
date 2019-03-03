import React from 'react';
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

export default OperationListItem;
