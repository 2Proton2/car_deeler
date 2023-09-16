async function getAllDealer(req, res){
    try{
        console.log('backend : bring all the dealers');
        res.send({message : 'bring all the dealers'});
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllDealer
};