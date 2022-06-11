import { axiosInstance as axios } from '@/utils/axios';
import { createContext, useEffect, useReducer } from 'react';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZED: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const getCurrentUser = async () => {
        const res = await axios.get('/api/auth/current-user', {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        });
        localStorage.setItem('accessToken', accessToken);

        dispatch({
          type: 'INITIALIZED',
          payload: { isAuthenticated: true, user: res.user },
        });
      };
      getCurrentUser();
    }
    if (!accessToken) {
      dispatch({
        type: 'INITIALIZED',
        payload: { isAuthenticated: false, user: null },
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
