import { any, bool, object } from 'prop-types';
import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  if (isLoggedIn || rest.public) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props}></Component>;
        }}
      />
    );
  }
  return <Redirect to={{ pathname: '/login' }} />;
};

PrivateRoute.propTypes = {
  component: any,
  isLoggedIn: bool,
  rest: object,
  props: object,
};

export default withRouter(PrivateRoute);
