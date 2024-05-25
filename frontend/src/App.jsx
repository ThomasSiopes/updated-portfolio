import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'

//Components

//Pages
const Home = React.lazy(() => import("./pages/Main"));
// const AllProjects = React.lazy(() => import("./pages/allProjects"));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/allProjects" element={<AllProjects/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
