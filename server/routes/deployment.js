const express = require('express');
const router = express.Router();
const DeploymentModel = require('../model/Deployment')

router.get('/', async(req, res, next) => {
    const result = await DeploymentModel.find();
    res
        .status(200)
        .send(result)
})

router.get('/:id', async(req, res, next) => {
    const result = await DeploymentModel.findById(req.params.id);
    res
        .status(200)
        .send(result)
})

router.post('/', async(req, res, next) => {
    const Deployment = new DeploymentModel({
        ...req.body,
        deployedAt: new Date()
    })
    const result = await Deployment.save();
    res
        .status(200)
        .send(result)
});

router.delete('/:id', async(req, res, next) => {
    const result = await DeploymentModel.findByIdAndRemove(req.params.id);
    res
        .status(200)
        .send(result)
});

module.exports = router;
