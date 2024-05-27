import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Intro = () => {
    return (
        <Container className="text-center align-items-center d-flex fullscreen pb-5">
            <section className="font-questrial genText mx-auto">
                <h1>Hi, I'm Tom Siopes</h1>
                <h5>I'm an aspiring full-stack web developer, and this is my portfolio app</h5>
                <p className="pt-3">
                    <a className="btn btn-success rounded-0 rounded-start ms-1" href="#about">About Me</a>
                    <Link className="btn btn-success rounded-0 rounded-end me-1 border-start" to={`/allprojects`}>Projects</Link>
                </p>
            </section>
        </Container>
    )
}

export default Intro;