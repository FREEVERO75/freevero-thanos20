import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import './styles/styles.css';

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
