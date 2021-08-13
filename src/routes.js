import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About, Projects } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}
