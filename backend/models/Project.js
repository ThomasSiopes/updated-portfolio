const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    repoURL: { 
        type: String,
    },
    projectURL: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    tags: [
        {
            type: String
        }
    ]
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;