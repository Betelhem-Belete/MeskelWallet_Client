import { AuthContext } from '../Context/UserContext'
import { useContext } from 'react';

export const UseAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('usercontext must use inside a contextProvider');
  }
  return context;
};
