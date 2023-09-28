const express = require("express");
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();
const multer = require('multer');

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/'); // Specify the directory where files will be stored (create the 'uploads' directory)
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
    },
});

const upload = multer({ storage });

// Serve static files (if needed)
app.use(express.static('public'));

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    // File was uploaded successfully
    res.json({ message: 'File uploaded successfully.' });
});

app.post("/detect", (req, res) => { image.handleApiCall(req, res) })

// runclassifier.runClassifier();
app.listen(3000, () => {
    console.log("app is on port 3000");
});
