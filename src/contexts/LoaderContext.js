import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ Children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {Children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
