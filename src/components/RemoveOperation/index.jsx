import React from 'react';
import PropTypes from 'prop-types';

import Button from '../UI/Button';
import './RemoveOperation.scss';

const RemoveOperation = ({ proceed, dismiss }) => {
  return (
    <div className="remove-operation">
      <div className="item_row">
        <h3>Удалить</h3>
        <span>Вы уверены что хотите удалить эту операцию?</span>
      </div>
      <div className="item_row">
        <Button className="error" onClick={proceed}>
          Да
        </Button>
        <Button onClick={dismiss}>Отмена</Button>
      </div>
    </div>
  );
};

RemoveOperation.propTypes = {
  proceed: PropTypes.func.isRequired,
  dismiss: PropTypes.func.isRequired,
};

export default RemoveOperation;
