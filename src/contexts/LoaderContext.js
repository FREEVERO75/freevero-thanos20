import { createContext, useContext, useEffect, useState } from 'react';
import { setLoaderFunctions } from '../controllers/loaderController';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoaderFunctions(showLoader, hideLoader);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
