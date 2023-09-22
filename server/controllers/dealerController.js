const userSchema = require("../models/user");

async function getAllDealer(req, res){
    try{
        const allDealers = await userSchema.find({ type: "dealer" });
        res.status(200).json(allDealers);

        if(!allDealers){
            throw new Error("No Dealer Found");
        }
    }
    catch(err){
        console.log(err);
        if(err.message === "No Dealer Found"){
            res.status(422).send(err.message);
        }
        else{
            res.status(422).send("Unprocessable req")
        }
    }
}

module.exports = {
    getAllDealer
};