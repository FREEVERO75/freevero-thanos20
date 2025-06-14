import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes/routes';
import './styles/styles.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  const location = useLocation();
  // Find the current route configuration
  const currentRoute =
    routes.find(route => route.path === location.pathname) || {};
  return (
    <div>
      {currentRoute.showHeaderAndFooter && <Header />}

      <Routes>
        {routes.map((route, index) => {
          const element = route.protected ? (
            <ProtectedRoute allowedRoles={route.roles}>
              {route.element}
            </ProtectedRoute>
          ) : (
            route.element
          );

          return <Route key={index} path={route.path} element={element} />;
        })}
      </Routes>
      {currentRoute.showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
