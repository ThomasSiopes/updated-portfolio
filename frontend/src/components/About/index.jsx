import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutMe = () => {
    return(
        <Container className="fullscreen">
            <Row>
                <Col xs={6} lg={4}>
                    <Card className="font-questrial bg-green genText rounded mb-3">
                        <Card.Title className="py-3 mb-0">Front-End</Card.Title>
                        <Card.Body className="pt-0">
                            <ul className="noDecor ps-0 mb-0">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>JQuery</li>
                                <li>Handlebars</li>
                                <li>Bootstrap and similar frameworks</li>
                                <li>PHP</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} lg={4}>
                    <Card className="font-questrial bg-green genText rounded mb-3">
                        <Card.Title className="py-3 mb-0">Back-End</Card.Title>
                        <Card.Body className="pt-0">
                            <ul className="noDecor ps-0 mb-0">
                                <li>Node.js</li>
                                <li>MySQL</li>
                                <li>Mongoose & MongoDB</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} lg={4}>
                    <Card className="font-questrial bg-green genText rounded mb-3">
                        <Card.Title className="py-3 mb-0">Tools of Development</Card.Title>
                        <Card.Body className="pt-0">
                            <ul className="noDecor ps-0 mb-0">
                                <li>Github</li>
                                <li>Heroku</li>
                                <li>Visual Studio Code</li>
                                <li>Brackets</li>
                                <li>MySQL Workbench</li>
                                <li>XAMPP</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )   
}

export default AboutMe;