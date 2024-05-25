import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function AllProjects() {
    //import.meta.env.VITE_MONGODB_URI + "/api/projects"
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4001/api/projects").then((res) => setProjects(res.data)).catch((err) => {console.error(err)});
    }, []);

    const projectList = (projects.length === 0 ? "Loading..." : projects.map((projectIndex) => <li key={projectIndex + "key"}>{projectIndex.title}</li>));

    return (
        <div>
            {projectList}
        </div>
    )
}

export default AllProjects;