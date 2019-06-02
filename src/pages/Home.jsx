import React from 'react';
import Menu from '../containers/Menu';
import TimeTable from '../containers/TimeTable';

import { requireAuth } from '../hoc/requireAuth';
const Home = () => (
  <React.Fragment>
    <TimeTable />
    <Menu />
  </React.Fragment>
);

export default requireAuth(Home);
