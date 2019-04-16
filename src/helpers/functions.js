import * as consts from './constants';
import moment from 'moment';

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

export const calcBalance = (operations, initialBalance = 0) => {
  return operations.reduce((balance, operation) => {
    return operation.type === consts.OPERATION_CREDIT
      ? (balance -= operation.amount)
      : (balance += operation.amount);
  }, initialBalance);
};

export const parsePeriodBorders = (time, period = 'week') => {
  let periodFormat = {
      week: 'D MMMM YYYY',
      mounth: 'MMMM YYYY',
    },
    date = moment(time * (1000 * 60 * 60 * 24)),
    start = date.startOf(period).format(periodFormat[period]),
    end = date.endOf(period).format(periodFormat[period]);

  return {
    start,
    end,
  };
};

export const sortOperations = (opA, opB) => {
  if (opA.type === opB.type) return opA.timestamp - opB.timestamp;

  if (opA.type === consts.OPERATION_CREDIT) return 1;

  return -1;
};
