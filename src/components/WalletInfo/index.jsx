import React from 'react';
import PropTypes from 'prop-types';

import { moneyFormat } from '../../helpers/functions';

const WalletInfo = ({ balance }) => {
  return (
    <div>
      <span>Текущий остаток:</span>
      <strong>{moneyFormat(balance)}</strong>
    </div>
  );
};

WalletInfo.propTypes = {
  balance: PropTypes.number.isRequired,
};
export default WalletInfo;
