import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header';
import TimeTable from '../containers/TimeTable';

import { requireAuth } from '../hoc/requireAuth';
const Home = () => (
  <React.Fragment>
    <Link to="/login">login</Link>
    <Header />
    <TimeTable />
  </React.Fragment>
);

export default requireAuth(Home);
