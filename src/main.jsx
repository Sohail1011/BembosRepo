import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BeneficsPage } from './pages/BeneficsPage.jsx';
import { MenuPage } from './pages/MenuPage.jsx';
import { PromotionsPage } from './pages/PromotionsPage.jsx';
import { BurgerPage } from './pages/BurgerPage.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/beneficios",
    element: <BeneficsPage />
  },
  {
    path: "/menu",
    element: <MenuPage />
  },
  {
    path: "/promociones",
    element: <PromotionsPage />
  },
  {
    path: "/hamburguesa",
    element: <BurgerPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
