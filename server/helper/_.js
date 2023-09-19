const userSchema = require('../models/user');

const isAdmin = function isAdmin(incoming){
    const { type } = incoming;
    return (type === "dealer") ? true : false;
}

const emailExistence = async function emailExistence(incoming){
    try{
        const { emailid } = incoming;
        let emailExistence = await userSchema.find({ emailid: `${emailid}` });
        return (emailExistence.length) ? true : false;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    isAdmin,
    emailExistence
}