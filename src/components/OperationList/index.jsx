import React from 'react';
import PropTypes from 'prop-types';

import './OperationList.scss';

import OperationListItem from '../OperationListItem';

const OperationList = ({ operations, handlers }) => {
  return (
    <div className="operation-list">
      {operations.length ? (
        operations.map(operation => (
          <OperationListItem
            key={operation.id}
            operation={operation}
            editHandler={handlers.editHandler}
            removeHandler={handlers.removeHandler}
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
