const _ = require('../helper/_');

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

module.exports = {
    checkAllParams
}