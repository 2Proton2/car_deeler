const carSchema = require('../models/car');
const userSchema = require('../models/user');

async function getNew(req, res){
    try{
        const newCar = await carSchema.find({version: "new"});
        if(newCar.length > 0){
            res.status(200).json(newCar);
        }
        else{
            throw new Error("No Data");
        }
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function getOld(req, res){
    try{
        const oldCar = await carSchema.find({version: "old"});
        if(oldCar.length > 0){
            res.status(200).json(oldCar);
        }
        else{
            throw new Error("No Data");
        }
    }
    catch(err){
        console.log(err)
        res.status(422).send("Invalid Input");
    }
}

async function getCarParticular(req, res){
    try{
        const carName = req.params.name;
        const { id } = req.query;
        const carDetails = await carSchema.find({
            carname: `${carName}`,
            _id: id
        });
        if(carDetails){
            res.status(200).json(carDetails);
        }
        else{
            throw new Error("Invalid Input");
        }
    }
    catch(err){
        console.log(err)
        if(err.message === "Invalid Input"){
            res.status(422).send({message: err.message});
        }
        else{
            res.status(422).send("Cannot able to process the req")
        }
    }
}

async function applyForCar(req, res){
    try{
        console.log(`User is authenticated`)
        getCarParticular(req, res);
    }
    catch(err){
        console.log(err)
        res.status(422).send({message: err.message});
    }
}

async function addCar(req, res){
    try{
        const missingField = Object.keys(req.body).filter((e) => !(req.body[e]));
        const { type } = req.query;
        const { userid } = req.userid;
        
        if(missingField.length > 0){
            throw new Error("Please fill all the details");
        }

        const modifiedCarObj = {type, userid, ...req.body};

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
        const { userid } = req;

        const userInventory = await carSchema.find({ userid: `${userid}` });
        
        if(userInventory){
            res.status(200).json(userInventory)
        }
        else{
            res.send(200).json({message: "Inventory is empty"});
        }
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
    getCarParticular,
    applyForCar,
    addCar,
    getMyInventoryCarList,
    updateACar
};