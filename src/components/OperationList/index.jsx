import React from 'react';

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

export default OperationList;
