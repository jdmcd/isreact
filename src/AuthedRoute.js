import React from 'react';
import UserManager from './API/UserManager';
import { Redirect, Route } from 'react-router-dom';

const AuthedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = UserManager.isLoggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default AuthedRoute