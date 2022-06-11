import { AuthContext } from '@/context/AuthContext';
import { AUTH_PATH } from '@/routes/path';
import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const [state] = useContext(AuthContext);

  const { isAuthenticated } = state;

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={AUTH_PATH.login} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
