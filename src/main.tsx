// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css'
import AppRoutes from './routes/routes.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
