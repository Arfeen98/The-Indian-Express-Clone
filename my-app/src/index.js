import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <AuthContextProvider>

      <BrowserRouter>
      <ChakraProvider>
    <App />
      </ChakraProvider>
      </BrowserRouter>
      </AuthContextProvider>
    </Provider>
);

