import React from 'react';
import PropTypes from 'prop-types';

import './OperationListItem.scss';

import {
  moneyFormat,
  timeFormat,
  operationCssClass,
} from '../../helpers/functions';

const OperationListItem = ({
  operation,
  operation: { type, amount, description, timestamp },
  editHandler,
  removeHandler,
}) => {
  const time = timeFormat(timestamp);
  return (
    <div className={`operation-list_item ${operationCssClass(type)}`}>
      <div className="item_row">
        <span className="amount">{moneyFormat(amount)}</span>
      </div>
      {description ? (
        <div className="item_row">
          <span className="description">{description}</span>
        </div>
      ) : null}
      <div className="item_row controls">
        <small onClick={() => removeHandler(operation)} className="remove">
          удалить
        </small>
      </div>
      <div className="item_row">
        <small className="time">
          {time.display}
          <span className="tooltip">{time.accurate}</span>
        </small>
      </div>
    </div>
  );
};

OperationListItem.propTypes = {
  operation: PropTypes.object.isRequired,
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default OperationListItem;
