// runClassifier.js
const classifyImage = require("./classifyImage");



async function runClassifier() {
    console.log("Current directory:", __dirname);
    const imagePath = "/Users/farzankhan/Downloads/AI-1/download.jpeg"; // Replace with the path to the image you want to classify.
    console.log();
    const predictions = await classifyImage.classifyImage(imagePath);
    console.log(predictions);
}

module.exports = {
    runClassifier
}
