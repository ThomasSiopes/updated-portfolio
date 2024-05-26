import React, { useState } from "react";
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaMoon, FaSun, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./assets/themes";
import { AiOutlineMail } from "react-icons/ai"

//Components

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
        <React.Suspense fallback={<div>Loading...</div>}>
          <section className="fixed-top">
            <Navbar bg="navbar" variant="dark" className="font-questrial">
              <Container>
                <span className="float-left d-xs-inline d-md-none">
                  <Button className="rounded-0 btn-contact-sm btn-github" href="https://github.com/ThomasSiopes"><FaGithub/></Button>
                  <Button className="rounded-0 btn-contact-sm btn-linkedin" href="https://www.linkedin.com/in/thomas-siopes-001707207/"><FaLinkedinIn/></Button>
                  <Button className="rounded-0 btn-contact-sm btn-email" href="mailto:t.siopes00@yahoo.com"><AiOutlineMail/></Button>
                </span>
                <Nav className="ms-auto">
                    <Link className="nav-link mx-2 d-none d-md-inline" to={`/`}>Home</Link>
                    <Link className="nav-link mx-2 d-none d-md-inline" to={`/allprojects`}>Projects</Link>

                    <div className="d-flex align-items-center">
                      <FaSun className="genText mx-2"/>
                      <label className="switch">
                        <input type="checkbox" id="theme-switch" onClick={() => handleChange()}/>
                        <span className="slider round"/>
                      </label>
                      <FaMoon className="genText mx-2"/>
                    </div>
                </Nav>
              </Container>
            </Navbar>
          </section>
        </React.Suspense>
        <span id="contact-buttons" className="fixed-top d-none d-md-inline">
          <ul className="noDecor ps-0 mb-0">
            <li><Button className="btn-contact btn-github" href="https://github.com/ThomasSiopes" ><FaGithub/></Button></li>
            <li><Button className="btn-contact btn-linkedin" href="https://www.linkedin.com/in/thomas-siopes-001707207/" ><FaLinkedinIn/></Button></li>
            <li><Button className="btn-contact btn-email pt-1 pb-2" href="mailto:t.siopes00@yahoo.com"><AiOutlineMail/></Button></li>
          </ul>
        </span>
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
