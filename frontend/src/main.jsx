import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// Pages
import Main from "./pages/Main.jsx";
import AllProjects from './pages/AllProjects.jsx';

// Routes
const router = createBrowserRouter([
  {path: "/", element: <Main/>},
  {path: "/allProjects", element: <AllProjects/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
