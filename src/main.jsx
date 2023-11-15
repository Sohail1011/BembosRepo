import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { HomePage } from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BeneficsPage } from './pages/BeneficsPage.jsx';
import { MenuPage } from './pages/MenuPage.jsx';
import { PromotionsPage } from './pages/PromotionsPage.jsx';
import { BurgerPage } from './pages/BurgerPage.jsx';
import { BurgerChildren } from './pages/BurgerChildren.jsx';
import { Listado } from './components/Listado.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    element: <BurgerPage />,
    children: [
      {
        index: true, element: <Listado />
      },
      {
        path: "contacts/:contactid",
        element: <BurgerChildren />
      },
    ],
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
