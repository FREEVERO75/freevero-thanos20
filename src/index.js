import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoaderProvider } from './contexts/LoaderContext';
import { Loader } from './components/loader/Loader';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
import { VehicleProvider } from './contexts/VehicleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoaderProvider>
    <BrowserRouter>
      <AuthProvider>
        <VehicleProvider>
          <ToastProvider>
            <Loader />
            <App />
          </ToastProvider>
        </VehicleProvider>
      </AuthProvider>
    </BrowserRouter>
  </LoaderProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
