const express = require("express");
const cors = require('cors');
const path = require('path'); // Import the path module
const image = require('./controllers/detect')

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
app.use('/uploads', express.static('uploads'));

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file.filename)

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // File was uploaded successfully
  res.json(req.file.filename);
});

// app.get('/uploads', )

app.post("/process_capture", (req, res) => { image.handleCaptureApiCall(req, res) })
app.post("/process_submit", (req, res) => { image.handleSubmitApiCall(req, res) })

// runclassifier.runClassifier();
app.listen(3000, () => {
  console.log("app is on port 3000");
});
