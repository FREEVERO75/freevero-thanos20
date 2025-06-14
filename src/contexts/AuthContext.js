import { jwtDecode } from 'jwt-decode';
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../constants/paths';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);
  const [loading, setLoading] = useState(true);
  const authToken = localStorage.getItem('token');

  const navigate = useNavigate();

  const logout = () => {
    setAuthState(null);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    navigate(HOME_ROUTE);
  };

  useEffect(() => {
    if (
      authToken &&
      authToken !== null &&
      authToken !== 'null' &&
      authToken !== ''
    ) {
      try {
        const user = jwtDecode(authToken.slice(7));
        setAuthState(user);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authState, logout, setAuthState, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
