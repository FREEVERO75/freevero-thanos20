import { createContext, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showSuccess = (message = 'Επιτυχής ενέργεια!') => {
    toast.success(message);
  };

  const showError = (message = 'Κάποιο σφάλμα προέκυψε!') => {
    toast.error(message);
  };

  return (
    <ToastContext.Provider value={{ showSuccess, showError }}>
      {children}
      <ToastContainer position='top-right' autoClose={9000} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
