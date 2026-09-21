import React, { useState, useEffect } from "react";
import axios from "axios";

import FilteredList from "../components/FilteredList";
import { Container } from "react-bootstrap";

const tagList = ["Front-End", "Back-End", "HTML", "CSS", "Javascript", "React", "JQuery", "Node.js", "MySQL", "Mongoose"];

function Projects() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState({
        tags:[],
    })

    useEffect(() => {
        axios.get("/api/projects")
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
                <ul id="filters" className="text-center p-0">
                    <li className="btn btn-green-inverse rounded-pill m-1" onClick={clearTags}>
                        Show All
                    </li>
                    {tagList.map((index) => (
                        <li className="m-1" onClick={updateTags} key={index}>
                            <span activeattribute="false" className="tag-button btn btn-green-inverse rounded-pill" title={index}>
                                {index}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <FilteredList projectList={projectList} chosenTags={filter.tags}/>
        </Container>
    )
}

export default Projects;