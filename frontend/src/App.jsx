import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'

//Components

//Pages
const Home = React.lazy(() => import("./pages/Main"));
const Projects = React.lazy(() => import("./pages/Projects"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<React.Suspense><Home/></React.Suspense>}/>
        <Route exact path="/allprojects" element={<React.Suspense><Projects/></React.Suspense>}/>
      </Routes>
    </Router>
  )
}

export default App
