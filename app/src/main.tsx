import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage/index.tsx';
import AboutPage from './pages/AboutPage/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
