import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About, Works, Hobbies } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/hobbies" component={Hobbies} />
      </Switch>
    </BrowserRouter>
  );
}
