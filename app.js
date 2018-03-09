const express = require('express')
const app = express()
const mongo = require('./mongodb')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));


const forms = require('./forms.js')(app, mongo);






app.listen(3000, function () {

    console.log('Server Running at 3000')

})