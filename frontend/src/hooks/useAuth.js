import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
  const [state, dispatch] = useContext(AuthContext);
  return [state, dispatch];
};

export default useAuth;
