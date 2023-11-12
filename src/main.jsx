import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BeneficsPage } from './pages/BeneficsPage.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/beneficios",
    element: <BeneficsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
