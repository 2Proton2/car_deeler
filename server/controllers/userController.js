const userSchema = require('../models/user');
const jwt = require('jsonwebtoken');

async function signingUp(req, res){
    try{
        const userInput = req.body;
        const { type } = req.query;
        const modifiedObject = { "type": type, ...userInput };

        let emailExistence = await userSchema.find({ emailid: `${modifiedObject.emailid}` });
        if(emailExistence.length){
            throw new Error("Email already exists in database");
        }

        const queryObject = new userSchema(modifiedObject);

        /**
         * generateAuthToken
         */
        const generateToken = await queryObject.generateAuthToken();

        const result = await queryObject.save();

        if(result){
            res.status(201).json("Saved Succefully");
        }
    }
    catch(err){
        console.log(err);
        if(err.message === "Email already exists in database"){
            res.status(409).send(err.message);
        }
        else{
            res.status(422).json({"message": "Invalid Details"});
        }
    }
}

async function updateUserDetails(req, res){
    try{
        console.log('backend : Updatind the user details');
        res.send({message : 'Updatind the user details'});
    }
    catch(err){
        console.log(err);
    }
}

async function logUserIn(req, res){
    try{
        console.log('backend : logging in user ');
        res.send({message : 'logging in user '});
    }
    catch(err){
        console.log(err);
    }
}

async function forgotPassword(req, res){
    try{
        console.log('backend : sending the reset link');
        res.send({message : 'sending the reset link'});
    }
    catch(err){
        console.log(err);
    }
}

async function getUserDetails(req, res){
    try{
        console.log('backend : bringing the user details');
        res.send({message : 'bringing the user details'});
    }
    catch(err){
        console.log(err);
    }
}

async function queryFindOne(){

}

module.exports = {
    signingUp,
    updateUserDetails,
    logUserIn,
    forgotPassword,
    getUserDetails
};