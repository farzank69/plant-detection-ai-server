const express = require("express");
const cors = require('cors');

const classifyimg = require("./controllers/classifyImage");
const loadmodel = require("./controllers/loadModel");
const runclassifier = require("./controllers/runClassifier");
const image = require("./controllers/detect");
// const exp = require("constants");

const app = express();
const multer = require('multer');

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });


  const upload = multer({ storage });
// app.post("/", (req, res) => { runclassifier.runClassifier(req, res) });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ message: 'File uploaded successfully', filename: req.file.filename });
  });

app.post("/detect", (req,res) => { image.handleApiCall(req, res) })

// runclassifier.runClassifier();
app.listen(3000, () => {
    console.log("app is on port 3000");
})