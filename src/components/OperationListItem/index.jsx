import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './OperationListItem.scss';

import {
  moneyFormat,
  timeFormat,
  operationCssClass,
} from '../../helpers/functions';

const OperationListItem = ({
  operation,
  operation: { type, amount, description, timestamp, removing = false },
  editHandler,
  removeHandler,
}) => {
  const time = timeFormat(timestamp),
    className = classNames('operation-list_item', operationCssClass(type), {
      removing,
    });

  return (
    <div className={className}>
      <div className="item_row">
        <span className="amount">{moneyFormat(amount)}</span>
      </div>
      {description ? (
        <div className="item_row">
          <span className="description">{description}</span>
        </div>
      ) : null}
      <div className="item_controls">
        <button
          type="button"
          onClick={() => removeHandler(operation)}
          className="remove"
          aria-label="Remove">
          <span aria-hidden="true">×</span>
        </button>
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
