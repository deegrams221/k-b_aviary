import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AdminInventoryPage from './components/admin-pages/AdminInventoryPage.js';
// import {
//   default as AdminLogin,
//   default as fakeAuth,
// } from './components/admin-pages/AdminLogin';
import AdminLogin from './components/admin-pages/AdminLogin';
import Home from './components/landingpage/Home';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         fakeAuth.isAuthenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/admin', state: { from: '/' } }} />
//         )
//       }
//     />
//   );
// };

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={AdminLogin} />
        {/* <PrivateRoute path='/inventory' component={AdminInventoryPage} /> */}
        <Route path='/inventory' component={AdminInventoryPage} />
      </Switch>
    </>
  );
}
