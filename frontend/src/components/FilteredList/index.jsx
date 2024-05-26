import React from "react";

import { Row, Col } from "react-bootstrap";
import ProjectLoad from "../ProjectLoad";

const FilteredList = (input) => {
    const allProjects = input.projectList;
    let filtered = [];

    const checker = (arr1, arr2) => arr2.every(v => arr1.includes(v));

    for(let index of allProjects) {
        if(checker(index.tags,input.chosenTags) && !(filtered.includes(index))) filtered.push(index);
    }

    const filteredRow = (filtered.length <= allProjects.length && filtered) ? filtered.map((index) => (
        index.title &&
        <Col key={"key" + index.title} xs={12} md={6} lg={4} xl={3} className="mb-3">
            <ProjectLoad project={index}/>
        </Col>    
    )) : 
        allProjects.map((index) => (
        <Col key={"key" + index.title} xs={12} md={6} lg={4} xl={3} className="mb-3">
            <ProjectLoad project={index}/>
        </Col> 
        ))
    ;

    return (
        <Row>
            {filteredRow}
        </Row>
    )
}

export default FilteredList;