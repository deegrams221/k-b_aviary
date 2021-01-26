import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminInventoryPage from './components/admin-pages/AdminInventoryPage';
import AdminLogin from './components/admin-pages/AdminLogin';
import * as ROUTES from './components/constants/routes';
import Home from './components/landingpage/Home';
import firebaseConfig from './firebase';
import PrivateRoute from './PrivateRoute';

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path={ROUTES.LOGIN} component={AdminLogin} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <PrivateRoute
              exact
              path={ROUTES.ADMIN}
              isLoggedIn={isLoggedIn}
              component={AdminInventoryPage}
            />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
