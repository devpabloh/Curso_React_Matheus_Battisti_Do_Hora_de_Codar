import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { CounterContextProvider } from './Context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Criando provider */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);
reportWebVitals();
