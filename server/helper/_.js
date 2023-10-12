const userSchema = require('../models/user');

const isAdmin = function isAdmin(type){
    return (type === "admin") ? true : false;
}

const emailExistence = async function emailExistence(incoming){
    try{
        const { emailid } = incoming;
        let emailExistence = await userSchema.find({ emailid: `${emailid}` });
        let flag = (emailExistence.length) ? true : false;
        return { "flag": flag, "userParams": emailExistence[0] }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    isAdmin,
    emailExistence
}