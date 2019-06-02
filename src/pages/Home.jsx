import React from 'react';
import Menu from '../containers/Menu';
import TimeTable from '../containers/TimeTable';

import { requireAuth } from '../hoc/requireAuth';
const Home = () => (
  <main className="home">
    <TimeTable />
    <Menu />
  </main>
);

export default requireAuth(Home);
