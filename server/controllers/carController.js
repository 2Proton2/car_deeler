async function getNew(req, res){
    try{
        console.log('backend : hey I want a NEW car');
        res.send({message : 'hey I want a NEW car'});
    }
    catch(err){
        console.log(err)
    }
}

async function getOld(req, res){
    try{
        console.log('backend : hey I want a OLD car');
        res.send({message : 'hey I want a OLD car'});
    }
    catch(err){
        console.log(err)
    }
}

async function getNewParticular(req, res){
    try{
        console.log('backend : hey I want a NEW PARTICULAR car', req.params.name);
        res.send({message : `hey I want a NEW PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function getOldParticular(req, res){
    try{
        console.log('backend : hey I want a OLD PARTICULAR car', req.params.name);
        res.send({message : `hey I want a OLD PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function applyForNewCar(req, res){
    try{
        console.log('backend : hey I am enquiring for a NEW PARTICULAR car', req.params.name);
        res.send({message : `hey I am enquiring for a NEW PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function applyForOldCar(req, res){
    try{
        console.log('backend : Adding a Old car', req.params.name);
        res.send({message : `Adding a old car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function addCar(req, res){
    try{
        console.log('backend : Adding a New car', req.params.name);
        res.send({message : `Adding a New car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function getMyInventoryCarList(req, res){
    try{
        console.log('backend : bring all your inventory list', req.params.name);
        res.send({message : `bring all your inventory list ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function updateACar(req, res){
    try{
        console.log('backend : updating your car details', req.params.name);
        res.send({message : `updating your car details ${req.params.name}`});
    }
    catch(err){
        console.log(err)
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