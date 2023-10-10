import { useState } from 'react';
import { UseAuthContext } from './useAuthContext';

export const useLogin = () => {
  const { dispatch } = UseAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const Toast = useToast();

  const Apilogin = import.meta.env.VITE_API_LOGIN;
  const login = async (Email, password) => {
    setIsLoading(true);
    const response = await fetch(Apilogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
      Toast({
        title: 'Loged in failed',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
    if (response.ok) {
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
      localStorage.setItem('user', JSON.stringify(json));
      Toast({
        title: 'Loged in successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
  };
  return { isLoading, error, login };
};
