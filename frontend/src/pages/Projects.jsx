import React, { useState, useEffect } from "react";
import axios from "axios";

import FilteredList from "../components/FilteredList";
import { Container } from "react-bootstrap";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState({
        tags:[],
    })

    useEffect(() => {
        axios.get("http://localhost:4001/api/projects")
        .then((res) => setProjects(res.data))
        .catch((err) => {console.error(err)});
    }, []);

    const projectList = (projects.length === 0 ? "Loading..." : projects)

    const addTags = (event) => {
        event.preventDefault();
        event.target.classList.remove("btn-green-inverse");
        event.target.classList.add("btn-green-inverse-activated");
        const newTag = event.target.title;
        let tagsCopy = [...filter.tags];

        if(filter.tags && !filter.tags.includes(newTag)) tagsCopy.push(newTag);
        event.target.activeattribute = "true";

        setFilter({...filter, tags: tagsCopy});
    }

    const removeTags = (event) => {
        event.target.classList.remove("btn-green-inverse-activated");
        event.target.classList.add("btn-green-inverse");
        let copyTags = [...filter.tags];

        if(copyTags && copyTags.includes(event.target.title)) copyTags.splice(copyTags.indexOf(event.target.title), 1);
        event.target.activeattribute = "false";

        setFilter({...filter, tags: copyTags});
    }

    const clearTags = () => {
        setFilter({...filter, tags:[]});
        let checks = document.getElementsByClassName("tag-button");
        for(let newIndex of checks) {
            newIndex.activeattribute = "false";
            newIndex.classList.remove("btn-green-inverse-activated");
            newIndex.classList.add("btn-green-inverse");
        }
    }

    const updateTags = (event) => {
        (event.target.activeattribute === "false" || event.target.activeattribute === undefined) ? addTags(event) : removeTags(event);
    }
    
    return(
        <Container className="mt-nav mx-auto">
            <div className="genText font-questrial text-center mb-3">
                <h1>My Projects</h1>
            </div>
            <div>
                <ul id="filters" className="text-center">
                    <li className="btn btn-green-inverse rounded-pill m-1" onClick={clearTags}>
                        Show All
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="Front-End">Front-End</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="Back-End">Back-End</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="HTML">HTML</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="CSS">CSS</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="Javascript">JavaScript</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="React">React</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="JQuery">JQuery</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="Node.js">Node.js</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="MySQL">MySQL</span>
                    </li>
                    <li className="m-1" onClick={updateTags}>
                        <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title="Mongoose">Mongoose</span>
                    </li>
                </ul>
            </div>
            <FilteredList projectList={projectList} chosenTags={filter.tags}/>
        </Container>
    )
}

export default Projects;