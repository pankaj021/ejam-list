//Import the mongoose module
let Mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = 'mongodb://localhost:27017/ejam_list';
Mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Get the default connection
let db = Mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
    console.log("MongoDB database connection established successfully");
});
module.exports = db;