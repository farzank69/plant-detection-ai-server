// loadModel.js
const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');

async function loadPretrainedModel() {
    const model = await mobilenet.load();
    return model;
}

module.exports = {
    loadPretrainedModel
}