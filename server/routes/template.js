const express = require('express');
const router = express.Router();
const TemplateModel = require('../model/Template')

router.get('/', async(req, res, next) => {
    const result = await TemplateModel.find();
    res
        .status(200)
        .send(result)
})

router.post('/', async(req, res, next) => {
    const Template = new TemplateModel(req.body)
    const result = await Template.save();
    res
        .status(200)
        .send(result)
});

router.delete('/:id', async(req, res, next) => {
    const result = await TemplateModel.findByIdAndRemove(req.params.id);
    res
        .status(200)
        .send(result)
});

module.exports = router;
