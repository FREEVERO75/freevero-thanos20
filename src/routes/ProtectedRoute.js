import { LOGIN_ROUTE } from '../constants/paths';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useLoader } from '../contexts/LoaderContext';

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { authState, loading } = useAuth();
  const { showLoader, hideLoader } = useLoader();

  if (loading) {
    showLoader();
    return null;
  } else {
    hideLoader();
  }

  if (!authState) return <Navigate to={LOGIN_ROUTE} replace />;

  if (allowedRoles && !allowedRoles.includes(authState?.role)) {
    return <Navigate to={LOGIN_ROUTE} replace />;
  }

  return children;
};
