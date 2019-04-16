import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './OperationListItem.scss';

import {
  moneyFormat,
  operationName,
  operationCssClass,
} from '../../helpers/functions';

const OperationListItem = ({
  operation,
  operation: { id, type, amount, description, timestamp },
  editHandler,
  removeHandler,
}) => {
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
      <div className="item_row controls">
        <small onClick={() => editHandler(operation)} className="edit">
          редактировать
        </small>
        &nbsp;
        <small onClick={() => removeHandler(operation)} className="remove">
          удалить
        </small>
      </div>
      <div className="item_row">
        <small className="time">
          {moment(timestamp).fromNow()}
          <span className="tooltip">
            {moment(timestamp).format('D MMMM YYYY HH:mm')}
          </span>
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
