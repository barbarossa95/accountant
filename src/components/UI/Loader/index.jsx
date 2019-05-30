import React from 'react';

import './Loader.scss';

const Loader = ({ className = '' }) => {
  return (
    <React.Fragment>
      <div className={`loader ${className}`}>
        <div />
      </div>
    </React.Fragment>
  );
};

export default Loader;
