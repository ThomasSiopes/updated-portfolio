import React, { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4001/api/projects")
        .then((res) => setProjects(res.data))
        .catch((err) => {console.error(err)});
    }, []);

    const projectList = (projects.length === 0 ? "Loading..." : projects.map((projectIndex) => <li key={projectIndex.title}>{projectIndex.title}</li>))
    
    return(
        <div>
            {projectList}
        </div>
    )
}

export default Projects;