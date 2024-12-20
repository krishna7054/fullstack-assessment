import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // Import Provider
import store from '../store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the app with Provider and pass store */}
      <BrowserRouter> {/* Wrap the app with BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
