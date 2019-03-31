import * as consts from './constants';

export const moneyFormat = value => `${value.toFixed(2)} \u{20BD}`;

export const operationName = type => {
  const operations = {
    [consts.OPERATION_CREDIT]: 'Расход',
    [consts.OPERATION_DEBIT]: 'Доход',
  };
  return operations[type] || 'Unknown operation';
};

export const operationCssClass = type => {
  const operations = {
    [consts.OPERATION_CREDIT]: 'credit',
    [consts.OPERATION_DEBIT]: 'debit',
  };
  return operations[type] || null;
};

export const calcBalance = operations => {
  let balance = 0;
  operations.forEach(operation => {
    operation.type === consts.OPERATION_CREDIT
      ? (balance -= operation.amount)
      : (balance += operation.amount);
  });

  return balance;
};
