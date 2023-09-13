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

async function postNewParticular(req, res){
    try{
        console.log('backend : hey I am enquiring for a NEW PARTICULAR car', req.params.name);
        res.send({message : `hey I am enquiring for a NEW PARTICULAR car ${req.params.name}`});
    }
    catch(err){
        console.log(err)
    }
}

async function postOldParticular(req, res){
    try{
        console.log('backend : hey I am enquiring for a OLD PARTICULAR car', req.params.name);
        res.send({message : `hey I am enquiring for a OLD PARTICULAR car ${req.params.name}`});
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
    postNewParticular,
    postOldParticular
};