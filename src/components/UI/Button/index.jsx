import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ onClick, className = '', children }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
