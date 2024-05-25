import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Intro = () => {
    return (
        <Container>
            <section>
                <h1>Hi, I'm Tom Siopes</h1>
                <h5>I'm an aspiring full-stack web developer, and this is my portfolio app</h5>
            </section>
            <section>
                <p>
                    <a href="#about">About Me</a>
                    <Link to={`/allprojects`}>Projects</Link>
                </p>
            </section>
        </Container>
    )
}

export default Intro;