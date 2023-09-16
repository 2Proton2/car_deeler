async function signingUp(req, res){
    try{
        console.log('backend : Signing up the user');
        res.send({message : 'Signing up the user'});
    }
    catch(err){
        console.log(err);
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

module.exports = {
    signingUp,
    updateUserDetails,
    logUserIn,
    forgotPassword,
    getUserDetails
};