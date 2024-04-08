import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import du necessaire pour le routing
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/index.tsx';

// Création du router
const router = createBrowserRouter(routes);

// Affichage de l'app React dans le DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
