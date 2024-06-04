import React from "react";
import { Container, Button, Card } from "react-bootstrap";

const ProjectLoad = (input) => {    
    const project = input.project;
    
    return(
        <Container>
            <Card className="text-center border-green font-questrial">
                {project.thumbnail && <Card.Img src={`/images/${project.thumbnail}`} alt="Preview failed to load"/>}
                <Card.Title className="m-2">{project.title}</Card.Title>
                {project.description && <Card.Body className="pt-1">{project.description}</Card.Body>}
                {project.status && <Card.Body className="pt-1">Status: {project.status}</Card.Body>}
                <Card.Footer>
                    {project.repoURL && <Button className="mx-1 mb-1" variant={"success"} href={project.repoURL}>Repo</Button>}
                    {project.projectURL && <Button className="mx-1" variant={"success"} href={project.projectURL}>Deployed Project</Button>}
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ProjectLoad;