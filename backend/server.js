const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/projects");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({origin:true, credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/projects", routes);

connectDB();

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, "../frontend/index.html")));

app.use(express.static(path.join(__dirname, '../dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist'))
})

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Server running on port ${port}`));