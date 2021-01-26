import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminInventoryPage from './components/admin-pages/AdminInventoryPage';
import AdminLogin from './components/admin-pages/AdminLogin';
import * as ROUTES from './components/constants/routes';
import Home from './components/landingpage/Home';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path={ROUTES.LOGIN} component={AdminLogin} />
          <Route exact path={ROUTES.HOME} component={Home} />
          <PrivateRoute
            exact
            path={ROUTES.ADMIN}
            authenticated={setAuthenticated}
            component={AdminInventoryPage}
          />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
