module.exports = function (app,mon) {

    //Saving New Application Data In MongoDb
    app.post('/consumer-newapp-save',function (req,res) {

            const newApplication = new mon.ConsumerNewApp({
                consumerNewApplication : [{
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
                    voltageSupply : req.body.voltageSupply,
                    statusOfApplication : false
                }]


            });
        newApplication.save(function(error) {
            if (error) {
                res.send(error);
            } else {
                //res.redirect('/');
                res.status(200).json(newApplication);

                console.log('consumer application saved!');
            }
        });

    });

    //Saving New Transfer Request Application in Mongo

    app.post('/consumer-tranferapp-save', function (req,res){

        const transferApplication = new mon.ConsumerTransferApp({

            transferApplication : [{
                transferringToName: req.body.newOwnerName,
                newOwnerAadharNumber: req.body.newOwnerAadharNumber,
                address: req.body.address,
                isTransferCompleted: false
            }]
        });

            transferApplication.save(function (error){
                if(error) {
                    res.send(error)
                }
                else {
                    res.status(200).json(transferApplication);
                    console.log('Transfer application saved!');
                }
            });


    });


    //Saving New Closure Request Application in Mongo

    app.post('/consumer-closureapp-save', function (req,res){

        const closureApplication = new mon.ConsumerClosureApp({

            closureOfConnection : [{

                lastBillNumber : req.body.lastBillNumber,
                lastBillAmount : req.body.lastBillAmount,
                reasonOfClosure : req.body.reasonOfClosure,
                isClosureApproved : false
            }]
        });

        closureApplication.save(function (error){
            if(error) {
                res.send(error)
            }
            else {
                res.status(200).json(closureApplication);
                console.log('Closure Request application saved!');
            }
        });


    });




}