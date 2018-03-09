module.exports = function (app,mon) {

    app.post('/consumer-newapp-save',function (req,res) {

            const consumer = new mon.Consumer({

                applicantName : req.body.applicantName,
                father_husbandName : req.body.fatherhusbandName,
                connectionAddress : req.body.connectionAddress,
                contactNumber : req.body.contactNumber,
                emailAddress : req.body.email,
                permanentAddress : req.body.permanentAddress,
                aadharNumber : req.body.aadharNumber,
                connectionCategory : req.body.connectionCategory,
                connectionType : req.body.connectionType,
                loadDemand : req.body.loadDemand,
                voltageSupply : req.body.voltageSupply

            });
        consumer.save(function(error) {
            if (error) {
                res.send(error);
            } else {
                res.redirect('/');
                console.log('consumer application saved!');
            }
        });

    });


}