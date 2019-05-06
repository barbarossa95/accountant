import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  const { className, onClick, children, ...restProps } = props;
  return (
    <button {...restProps} className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
