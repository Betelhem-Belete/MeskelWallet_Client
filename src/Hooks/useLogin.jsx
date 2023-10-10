import { useState } from 'react';
import { UseAuthContext } from './useAuthContext';

export const useLogin = () => {
  const { dispatch } = UseAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  // const Toast = useToast();

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
    }
    if (response.ok) {
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
      localStorage.setItem('user', JSON.stringify(json));
    }
  };
  return { isLoading, error, login };
};
