const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");

router.get('/test', (req, res) => res.send("route testing..."));

router.get("/", (req, res) => {
    Project.find().then(projects => res.json(projects)).catch(err => res.status(404).json({noprojectsfound: "Empty!"}));
});

router.get("/:id", (req, res) => {
    Project.findById(req.params.id).then(project => res.json(project)).catch(err => res.status(404).json({noprojectfound: "Empty request!"}));
});

router.post("/", (req,res) => {
    Project.create(req.body).then(project => res.json({mgs: "Project added successfully."}).catch(err => res.status(err).json({error: "Unable to add?"})));;
})

router.delete("/", (req, res) => {
    Project.deleteMany().then(project => res.json({mgs: "Deleted!"}));
});

module.exports = router;