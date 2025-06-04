import { jwtDecode } from 'jwt-decode';
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);
  const authToken = localStorage.getItem('token');

  const navigate = useNavigate();

  const logout = () => {
    setAuthState(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    if (
      authToken &&
      authToken !== null &&
      authToken !== 'null' &&
      authToken !== ''
    ) {
      let user;
      user = jwtDecode(authToken.slice(7));
      setAuthState(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, logout, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
