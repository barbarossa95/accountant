import React from 'react';
import PropTypes from 'prop-types';

import OperationListItem from '../OperationListItem';

const OperationList = props => {
  const { operations } = props;

  return (
    <div>
      {operations.length ? (
        operations.map((element, index) => (
          <OperationListItem key={index} {...element} />
        ))
      ) : (
        <div>there is no operations yet...</div>
      )}
    </div>
  );
};

OperationList.propTypes = {
  operations: PropTypes.array.isRequired,
};

export default OperationList;
