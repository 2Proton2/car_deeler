const _ = require('../helper/_');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const userSchema = require('../models/user');

const checkAllParams = function(req, res, next) {
    try{
        const { emailid, password } = req.body;
        if(!emailid || !password){
            res.status(422).send("Please fill all the details")
        }
        next();
    }
    catch(err){
        console.log(err);
        res.status(422).send(err);
    }
}

const authentication = async function(req, res, next){
    try{
        const headersRawData = req.headers;
        let rawToken = headersRawData.cookie
        const token = rawToken.split('=')[1].trim();
        const tokenVerfication = jwt.verify(token, SECRET_KEY);
        
        if(Date.now() > tokenVerfication.exp){
            throw new Error("Authentication Failed");
        }

        const userTokens = await userSchema.findOne({
            _id: tokenVerfication.id
        })
        .select({
            tokens:1,
            _id:0
        });

        if(userTokens) {
            const tokenValidation = userTokens.tokens.some((index) => index.token === token);
            if(!tokenValidation){
                throw new Error("Authentication Failed");
            }
            req.userid = tokenVerfication.id;
            req.validatedToken = token;
            next();
        }
    }
    catch(err){
        console.log(err)
        res.send(422).json({message: err.message})
    }
} 

module.exports = {
    checkAllParams,
    authentication
}