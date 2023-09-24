const userSchema = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('../helper/_');

async function signingUp(req, res){
    try{
        const userInput = req.body;
        const { type } = req.query;
        const modifiedObject = { "type": type, ...userInput };

        const emailExistence = await _.emailExistence(modifiedObject);
        if(emailExistence.flag){
            throw new Error("Email already exists in database");
        }

        const queryObject = new userSchema(modifiedObject);

        /**
         * generateAuthToken
         */
        const generateToken = await queryObject.generateAuthToken();
        
        /**
         * set @cookie
         */
        res.cookie("token", generateToken, {
            expires: new Date(Date.now() + 2592000000),
            httponly: true
        })

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
        res.status(422).send({ message: err.message })
    }
}

async function logUserIn(req, res){
    try{
        const { emailid, password } = req.body;
        const { type } = req.param;

        const emailExistence = await _.emailExistence(req.body);

        if(!emailExistence.flag){
            throw new Error("Invalid Credentials");
        }

        /**
         * compare the hashing of the password
         */
        const isMatch = await bcrypt.compare(password, emailExistence.userParams.password);

        if(isMatch){
            const admin = _.isAdmin(type);

            /**
             * reset the browser @cookie
             */
            res.cookie("token", "",{
                expires: new Date(0)
            });

            /**
             * generate @token and set @cookie
             * expires after 30 days
             */
            const generateToken = await emailExistence.userParams.generateAuthToken();
            res.cookie("token", generateToken, {
                expires: new Date(Date.now() + 2592000000),
                httponly: true
            });

            res.status(200).send({message : 'Successfully logged in'});
        }
        else{
            throw new Error("Authentication Failed");
        }
    }
    catch(err){
        res.status(422).send({ message: err.message })
    }
}

async function forgotPassword(req, res){
    try{
        console.log('backend : sending the reset link');
        res.send({message : 'sending the reset link'});
    }
    catch(err){
        console.log(err);
        res.status(422).send({ message: err.message })
    }
}

async function getUserDetails(req, res){
    try{
        console.log('backend : bringing the user details');
        res.send({message : 'bringing the user details'});
    }
    catch(err){
        console.log(err);
        res.status(422).send({ message: err.message })
    }
}

module.exports = {
    signingUp,
    updateUserDetails,
    logUserIn,
    forgotPassword,
    getUserDetails
};