import React from 'react';
import PropTypes from 'prop-types';

import './RemoveOperation.scss';

const RemoveOperation = ({ proceed, dismiss }) => {
  return (
    <div className="remove-operation">
      <div className="item_row">
        <h3>Удалить</h3>
        <span>Вы уверены что хотите удалить эту операцию?</span>
      </div>
      <div className="item_row">
        <button className="error" onClick={proceed}>
          Да
        </button>
        <button onClick={dismiss}>Отмена</button>
      </div>
    </div>
  );
};

RemoveOperation.propTypes = {
  proceed: PropTypes.func.isRequired,
  dismiss: PropTypes.func.isRequired,
};

export default RemoveOperation;
