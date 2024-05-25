import React from "react";

import { Row, Col } from "react-bootstrap";

import About from "../components/About";
import Intro from "../components/Intro";

function Main() {
    return(
        <div id="intro" className="text-center">
            <Intro/>
            <Row>
                <Col className="pe-0 align-items-center"><hr/></Col>
                <Col xs={4} md={2} xl={1} className="text-center pt-1 px-0" id="about">About Me</Col>
                <Col className="pe-0 align-items-center"><hr/></Col>
            </Row>
            <About/>
        </div>
    )
}

export default Main;