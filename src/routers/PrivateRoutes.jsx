import React from 'react';
import { Navigate } from 'react-router-dom';
import propTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
  const {
    user: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

PrivateRoute.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
};
export default PrivateRoute;
