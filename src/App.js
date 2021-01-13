import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminInventoryPage from './components/admin-pages/AdminInventoryPage';
import AdminLogin from './components/admin-pages/AdminLogin';
import * as ROUTES from './components/constants/routes';
import Home from './components/landingpage/Home';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={AdminLogin} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ADMIN} component={AdminInventoryPage} />
    </div>
  </Router>
);

export default App;
