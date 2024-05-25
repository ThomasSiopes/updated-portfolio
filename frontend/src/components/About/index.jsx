import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={7}>
                    <Row>
                        Stuff I know
                    </Row>
                </Col>
                <Col>
                    <p>Pic of me and maybe about me stuff idk</p>
                </Col>
            </Row>
        </Container>
    )   
}

export default AboutMe;