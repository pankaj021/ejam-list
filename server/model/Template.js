const Mongoose = require('mongoose');

const TemplateModel = Mongoose.model("template", {
    'name': String,
    "versions": Array
});

module.exports = TemplateModel;