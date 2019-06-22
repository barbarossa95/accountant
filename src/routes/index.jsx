import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';

import { redirectIfAuthentificated } from '../hoc/redirectIfAuthentificated';

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={redirectIfAuthentificated(Login)} />
    <Route
      render={() => {
        return (
          <div>
            <h1>404</h1>
            <p>Sorry, page not found</p>
          </div>
        );
      }}
    />
  </Switch>
);

export default routes;
