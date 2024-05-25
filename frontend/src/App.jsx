import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { FaMoon, FaSun, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./assets/themes";
import { AiOutlineMail } from "react-icons/ai"

//Components
const NavBar = React.lazy(() => import("./components/NavBar"));

//Pages
const Home = React.lazy(() => import("./pages/Main"));
const Projects = React.lazy(() => import("./pages/Projects"));

const StyledApp = styled.div``;

function App() {
  const [theme, setTheme] = useState("light");

  const themeDark = () => {
    setTheme("dark");
  }

  const themeLight = () => {
    setTheme("light");
  }

  const handleChange = () => {
    let currentTheme = document.getElementById("theme-switch");
    (currentTheme && currentTheme.checked) ? themeDark() : themeLight();
  }

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <span className="float-left d-xs-inline d-md-none">
          <Button className="rounded-0 btn-contact-sm btn-github" href="https://github.com/ThomasSiopes"><FaGithub/></Button>
          <Button className="rounded-0 btn-contact-sm btn-linkedin" href="https://www.linkedin.com/in/thomas-siopes-001707207/"><FaLinkedinIn/></Button>
          <Button className="rounded-0 btn-contact-sm btn-email" href="mailto:t.siopes00@yahoo.com"><AiOutlineMail/></Button>
        </span>
        <span id="contact-buttons" className="fixed-top d-none d-md-inline">
          <ul className="noDecor ps-0 mb-0">
            <li><Button className="btn-contact btn-github" href="https://github.com/ThomasSiopes" ><FaGithub/></Button></li>
            <li><Button className="btn-contact btn-linkedin" href="https://www.linkedin.com/in/thomas-siopes-001707207/" ><FaLinkedinIn/></Button></li>
            <li><Button className="btn-contact btn-email pt-1 pb-2" href="mailto:t.siopes00@yahoo.com"><AiOutlineMail/></Button></li>
          </ul>
        </span>
        <React.Suspense fallback={<div>Loading...</div>}><NavBar/></React.Suspense>
        <label className="switch">
          <input type="checkbox" id="theme-switch" onClick={() => handleChange()}/>
          <span className="slider round"/>
        </label>
        <StyledApp id="mainBody">
          <Routes>
            <Route exact path="/" element={<React.Suspense><Home/></React.Suspense>}/>
            <Route exact path="/allprojects" element={<React.Suspense><Projects/></React.Suspense>}/>
          </Routes>
        </StyledApp>
      </ThemeProvider>
    </Router>
  )
}

export default App
