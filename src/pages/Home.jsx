import React from 'react';
import Menu from '../containers/Menu';
import TimeTable from '../containers/TimeTable';

const Home = () => (
  <main className="home">
    <TimeTable />
    <Menu />
  </main>
);

export default Home;
