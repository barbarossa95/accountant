import React from 'react';
import PropTypes from 'prop-types';

import { moneyFormat } from '../../helpers/functions';

const WalletInfo = props => {
  return (
    <div>
      <span>Your current balance is:</span>
      <span>{moneyFormat(props.balance)}</span>
    </div>
  );
};

WalletInfo.propTypes = {
  balance: PropTypes.number.isRequired,
};
export default WalletInfo;
