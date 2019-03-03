import React from 'react';

import { moneyFormat } from '../../helpers/functions';

const WalletInfo = props => {
  return (
    <div>
      <span>Your current balance is:</span>
      <span>{moneyFormat(props.balance)}</span>
    </div>
  );
};

export default WalletInfo;
