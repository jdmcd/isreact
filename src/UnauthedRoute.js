import React from 'react';
import UserManager from './API/UserManager';
import { Redirect, Route } from 'react-router-dom';

const UnauthedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = UserManager.isLoggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
            <Redirect to={{ pathname: '/classes', state: { from: props.location } }} />
        ) : (
            <Component {...props} />
        )
      }
    />
  )
}

export default UnauthedRoute