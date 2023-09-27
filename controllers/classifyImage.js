const tf = require('@tensorflow/tfjs-node');
const loadPretrainedModel = require('./loadModel');
const fs = require('fs');

async function classifyImage(imagePath) {
    try {
        await fs.promises.access(imagePath, fs.constants.R_OK);
        console.log(`File ${imagePath} can be read.`);
    } catch (error) {
        console.error(`Error accessing ${imagePath}:`, error);
        return;
    }

    const model = await loadPretrainedModel.loadPretrainedModel();
    const img = tf.node.decodeImage(await fs.promises.readFile(imagePath));
    const predictions = await model.classify(img);
    return predictions;
}

module.exports = {
    classifyImage
};
