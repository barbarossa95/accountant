import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

import OperationList from '../OperationList';
import './OperationWeek.scss';

import { parsePeriodBorders } from '../../helpers/functions';

const OperationWeek = ({ operations, handlers }) => {
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
              <OperationList
                operations={operationsInWeek}
                handlers={handlers}
              />
            </Scrollbars>
          </div>
        );
      })}
    </div>
  );
};

OperationWeek.propTypes = {
  operations: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
};

export default OperationWeek;
