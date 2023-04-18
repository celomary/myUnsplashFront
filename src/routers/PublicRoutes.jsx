import React from 'react';
import { Navigate } from 'react-router-dom';
import propTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

function PublicRoute({ children }) {
  const {
    user: { isAuthenticated },
  } = useAuth();
  return !isAuthenticated ? (
    children
  ) : (
    <Navigate to="/profile" />
  );
}

PublicRoute.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
};
export default PublicRoute;
