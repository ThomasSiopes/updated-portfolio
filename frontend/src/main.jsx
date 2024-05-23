import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// Pages
import AllProjects from './pages/allProjects.jsx';

// Routes
const router = createBrowserRouter([
  {path: "/", element: <div>Hello! This is the main page!</div>},
  {path: "/allProjects", element: <AllProjects/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
