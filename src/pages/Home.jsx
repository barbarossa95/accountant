import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header';
import TimeTable from '../containers/TimeTable';

const Home = () => (
  <React.Fragment>
    <Link to="/login">login</Link>
    <Header />
    <TimeTable />
  </React.Fragment>
);

export default Home;
