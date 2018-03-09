const mongoose = require('mongoose')
//connecting mongoose to local db
mongoose.connect('mongodb://admin:admin@ds259268.mlab.com:59268/forms')


//checking the mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error")); //DB Connection fail
db.once("createConnection", function(callback) {
    console.log("MongoDB Connection Succeeded"); //DB connection success
});


//Mongoose Schema

const Schema = mongoose.Schema;

// Consumer Schema
const consumerSchema = new Schema({

    applicantName : String,
    father_husbandName : String,
    connectionAddress : String,
    contactNumber : String,
    emailAddress : String,
    permanentAddress : String,
    aadharNumber : Number,
    connectionCategory : String,
    connectionType : String,
    loadDemand : String,
    voltageSupply : String

})


module.exports = {

    Consumer : mongoose.model("Consumer", consumerSchema)


}