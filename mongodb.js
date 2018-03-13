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
 const consumerNewAppSchema = new Schema({
     //Array of Object for New Application
     consumerNewApplication:
         [{
             applicantName: String,
             father_husbandName: String,
             connectionAddress: String,
             contactNumber: String,
             emailAddress: String,
             permanentAddress: String,
             aadharNumber: Number,
             connectionCategory: String,
             connectionType: String,
             loadDemand: String,
             voltageSupply: String,
             statusOfApplication: Boolean
             //have to add a application Number field

         }]
  })
    //Array of Object for Transfer of Application

     consumerTransferSchema = new Schema({
         transferApplication : [{

             transferringToName : String,
             newOwnerAadharNumber : Number,
             address : String,
             isTransferCompleted : Boolean,
             //proofOfTransfer : String will be used to store pics


         }]
     })

    //Array of Object for Closure of Application

         consumerClosureOfConnection = new Schema({

             closureOfConnection : [{

                 lastBillNumber : Number,
                 lastBillAmount : Number,
                 reasonOfClosure : String,
                 isClosureApproved : Boolean
             }]
         })




// Admin/Department Employee Schema

 const employeeSchema = new Schema({

     //Array of Objects for Status of Application
     statusOfFinanceDepartment : Boolean,
     statusOfVerificationDepartment : Boolean,
     statusOfTechnicalDepartment : Boolean  //It means they have appointed a Line Man

     //We will Think About It
     // addEmployee : [{
     //     name : String,
     //     id : String,
     //     department : String
     // }]

 })

// Line Man Schema
 const lineManSchema = new Schema({

     isTaskCompleted : String,
     otpOfCompletion : Number

 })

module.exports = {

    ConsumerNewApp : mongoose.model("ConsumerNewApp", consumerNewAppSchema),
    ConsumerTransferApp : mongoose.model("ConsumerTransferApp", consumerTransferSchema),
    ConsumerClosureApp : mongoose.model("ConsumerClosureApp", consumerClosureOfConnection),
    Employee : mongoose.model("Employee", employeeSchema),
    LineMan : mongoose.model("LineMan", lineManSchema)

}