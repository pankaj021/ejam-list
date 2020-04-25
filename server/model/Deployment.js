const Mongoose = require('mongoose');

const DeploymentModel = Mongoose.model("deployment", {
    "url": String,
    "name": String,
    "version": String,
    "deployedAt": Date
});

module.exports = DeploymentModel;