import * as consts from './constants';

export const moneyFormat = value => `${value.toFixed(2)} \u{20BD}`;

export const operationName = type => {
  const operations = {
    [consts.OPERATION_CREDIT]: 'Credit',
    [consts.OPERATION_DEBIT]: 'Debit',
  };
  return operations[type] || 'Unknown operation';
};
