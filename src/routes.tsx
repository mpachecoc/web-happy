import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanages from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanage/create" component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanages} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;