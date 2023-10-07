import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <ChakraProvider> */}
        <App />
      {/* </ChakraProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);
