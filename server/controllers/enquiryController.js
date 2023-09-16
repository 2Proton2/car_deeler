async function createEnquiry(req, res) {
    try{
        console.log('backend : creating a new enquiry');
        res.send({message : 'creating a new enquiry'});
    }
    catch(err){
        console.log(err);
    }
}

async function getEnquiry(req, res){
    try{
        console.log('backend : bring all the enquiries');
        res.send({message : 'bring all the enquiries'});
    }
    catch(err){
        console.log(err);
    }
}

async function getParticularEnquiry(req, res){
    try{
        console.log('backend : bring particular enquiry');
        res.send({message : 'bring particular enquiry'});
    }
    catch(err){
        console.log(err);
    }
}

async function enquiryAcknowledgement(req, res){
    try{
        console.log('backend : enquiry acknowledged and corresponding respond is sent');
        res.send({message : 'enquiry acknowledged and corresponding respond is sent'});
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    createEnquiry,
    getEnquiry,
    getParticularEnquiry,
    enquiryAcknowledgement
}