import React from 'react';
import PropTypes from 'prop-types';

import { moneyFormat } from '../../helpers/functions';

const WalletInfo = ({ balance }) => {
  return (
    <div>
      <span>Текущий остаток:</span>
      <span>{moneyFormat(balance)}</span>
    </div>
  );
};

WalletInfo.propTypes = {
  balance: PropTypes.number.isRequired,
};
export default WalletInfo;
