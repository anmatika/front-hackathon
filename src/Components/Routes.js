import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrillDownContainer from './DrillDownContainer';
import DashboardContainer from './DashboardContainer';
import LandingPageContainer from './LandingPageContainer';

const Routes = props => (
  <Switch>
    <Route exact path="/" render={() => <LandingPageContainer {...props} />} />
    <Route path="/drilldown" render={() => <DrillDownContainer {...props} />} />
    <Route path="/dashboard" render={() => <DashboardContainer {...props} />} />
  </Switch>
);

export default Routes;