import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './sass/bootstrap.scss'
import './sass/style.scss'
import './sass/font.scss'
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/userContext';
import { CartProvider } from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

