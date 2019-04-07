import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import OperationList from '../OperationList';
import './OperationWeek.scss';

import { parsePeriodBorders } from '../../helpers/functions';

const OperationWeek = ({ operations }) => {
  return (
    <div className="operation-week">
      {Object.entries(operations).map(([week, operationsInWeek]) => {
        const weekBorders = parsePeriodBorders(week, 'week');

        return (
          <div className="operation-week__item" key={week}>
            <span className="operation-week__item-label">
              {`${weekBorders.start} - ${weekBorders.end}`}
            </span>
            <Scrollbars>
              <OperationList operations={operationsInWeek} />
            </Scrollbars>
          </div>
        );
      })}
    </div>
  );
};

export default OperationWeek;
