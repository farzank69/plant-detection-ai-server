const express = require("express");
const cors = require('cors');

const classifyimg = require("./controllers/classifyImage");
const loadmodel = require("./controllers/loadModel");
const runclassifier = require("./controllers/runClassifier");
// const exp = require("constants");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/", (req, res) => { runclassifier.runClassifier(req, res) });
runclassifier.runClassifier();
// app.listen(3000, () => {
//     console.log("app is on port 3000");
// })