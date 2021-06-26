import { NavigationUrls } from 'constants/navigationURLS';
import CreatePizza from 'pages/CreatePizza';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={NavigationUrls.root}>
          <Home />
        </Route>
        <Route path={NavigationUrls.createPizza}>
          <CreatePizza />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
