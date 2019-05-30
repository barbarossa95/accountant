import React from 'react';
import Header from '../containers/Header';
import TimeTable from '../containers/TimeTable';

import { requireAuth } from '../hoc/requireAuth';
const Home = () => (
  <React.Fragment>
    <Header />
    <TimeTable />
  </React.Fragment>
);

export default requireAuth(Home);
