const carSchema = require('../models/car');

async function getNew(req, res){
    try{
        // const getAllNewCars = await carSchema.find('')
        res.send({message : 'hey I want a NEW car'});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function getOld(req, res){
    try{
        console.log('backend : hey I want a OLD car');
        res.send({message : 'hey I want a OLD car'});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function getNewParticular(req, res){
    try{
        console.log('backend : hey I want a NEW PARTICULAR car', req.params.name);
        res.send({message : `hey I want a NEW PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function getOldParticular(req, res){
    try{
        console.log('backend : hey I want a OLD PARTICULAR car', req.params.name);
        res.send({message : `hey I want a OLD PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function applyForNewCar(req, res){
    try{
        console.log('backend : hey I am enquiring for a NEW PARTICULAR car', req.params.name);
        res.send({message : `hey I am enquiring for a NEW PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function applyForOldCar(req, res){
    try{
        console.log('backend : Adding a Old car', req.params.name);
        res.send({message : `Adding a old car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function addCar(req, res){
    try{
        const missingField = Object.keys(req.body).filter((e) => !(req.body[e]));
        const { type } = req.query;
        
        if(missingField.length > 0){
            throw new Error("Please fill all the details");
        }

        const modifiedCarObj = {type, ...req.body};

        const carInstance = new carSchema(modifiedCarObj);

        const result = await carInstance.save();

        console.log("Added Car Successfully");
        res.send({message : "Car Added Successfully"});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function getMyInventoryCarList(req, res){
    try{
        console.log('backend : bring all your inventory list', req.params.name);
        res.send({message : `bring all your inventory list ${req.params.name}`});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function updateACar(req, res){
    try{
        console.log('backend : updating your car details', req.params.name);
        res.send({message : `updating your car details ${req.params.name}`});
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

module.exports = {
    getNew,
    getOld,
    getNewParticular,
    getOldParticular,
    applyForNewCar,
    applyForOldCar,
    addCar,
    getMyInventoryCarList,
    updateACar
};