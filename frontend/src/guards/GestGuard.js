import useAuth from '@/hooks/useAuth';
import { DASHBOARD_PATH } from '@/routes/path';
import { Navigate } from 'react-router-dom';

const GestGuard = ({ children }) => {
  const [state] = useAuth();

  const { isAuthenticated } = state;

  if (isAuthenticated) {
    return <Navigate to={DASHBOARD_PATH.root} />;
  }

  return <>{children}</>;
};

export default GestGuard;
