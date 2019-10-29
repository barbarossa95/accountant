import React from 'react';
import PropTypes from 'prop-types';

import './OperationList.scss';

import OperationListItem from '../OperationListItem';

const OperationList = ({ operations, handlers }) => {
  const { editHandler, removeHandler } = handlers;
  return (
    <div className="operation-list">
      {operations.length ? (
        operations.map((operation, key) => (
          <OperationListItem
            key={key}
            operation={operation}
            editHandler={editHandler}
            removeHandler={removeHandler}
          />
        ))
      ) : (
        <div>there is no operations yet...</div>
      )}
    </div>
  );
};

OperationList.propTypes = {
  operations: PropTypes.array.isRequired,
  handlers: PropTypes.object.isRequired,
};

export default OperationList;
