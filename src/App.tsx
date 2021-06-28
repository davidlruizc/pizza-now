import { NavigationUrls } from 'constants/navigationURLS';
import CreatePizza from 'pages/CreatePizza';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path={NavigationUrls.root} component={Home} />
      <Route path={NavigationUrls.createPizza} component={CreatePizza} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
