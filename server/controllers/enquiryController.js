const _auth = require('../middlewares/auth');
const nodemailer = require('nodemailer');
const enquirySchema = require('../models/enquiry');
const userSchema = require('../models/user');
const mailConfig = require('../config/node-mailer');
const carSchema = require('../models/car');
const transporter = nodemailer.createTransport(mailConfig);


async function createEnquiry(req, res) {
    try{
        const enquirerid = req.userid;
        const { mode } = req.query;

        let enquiryObj = { mode, enquirerid, ...req.body};
        enquiryObj = new enquirySchema(enquiryObj);

        const custMailId = await userSchema.findOne({
            _id: enquirerid
        })
        .select({
            emailid:1,
            _id:0
        });

        const carName = await carSchema.findOne({
            _id:`${carid}`
        })
        .select({
            carname:1,
            _id:0
        });

        const dealerName = await userSchema.findOne({
            _id: `${req.body.dealerid}`
        })
        .select({
            shopdetails:1,
            _id:0
        });

        const result = await enquiryObj.save();
        if (mode === "purchase"){
            const message = {
                from: "no-reply@cardealer.com",
                to: `${custMailId.emailid}`,
                subject: 'Enquiry sent successfully',
                text: `Your enquiry for the car ${carName.carname} is sent at ${dealerName.shopdetails.shopname}`,
                // html: "<p><img style='width:150px; height:100px;' src='https://res.cloudinary.com/djfbnzspr/image/upload/v1695501177/WhatsApp_Image_2023-09-03_at_2.44.50_PM_uqcuas.jpg'/></p>"
            };

            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                    return process.exit(1);
                }
        
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });

            res.status(200).send({message : 'creating enquiry for car purchase'});
        }
        else if(mode === "sell"){
            const message = {
                from: "no-reply@cardealer.com",
                to: `${custMailId.emailid}`,
                subject: 'Enquiry sent successfully',
                text: `Your enquiry for the car ${carName.carname} is sent at ${dealerName.shopdetails.shopname}`,
                // html: "<p><img style='width:150px; height:100px;' src='https://res.cloudinary.com/djfbnzspr/image/upload/v1695501177/WhatsApp_Image_2023-09-03_at_2.44.50_PM_uqcuas.jpg'/></p>"
            };

            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                    return process.exit(1);
                }
        
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });

            res.status(200).send({message : 'creating enquiry a new for car sell'});
        }
    }
    catch(err){
        console.log(err);
        res.status(422).send({message: err.message});
    }
}

async function getEnquiry(req, res){
    try{
        const adminid = req.userid;
        const allEnquiries = await enquirySchema.find({dealerid: `${adminid}`});
        if(allEnquiries){
            res.status(200).json(allEnquiries);
        }
        else{
            res.status(200).send("No Notifications");
        }
    }
    catch(err){
        console.log(err);
        res.status(422).send({message: err.message});
    }
}

async function getParticularEnquiry(req, res){
    try{
        const adminid = req.userid;
        const { id } = req.query;
        const enquiry = await enquirySchema.find({dealerid: `${adminid}`, _id:`${id}`});
        
        if(enquiry){
            res.status(200).json(enquiry);
        }
        else{
            throw new Error("Something Went Wrong");
        }
    }
    catch(err){
        console.log(err);
        res.status(422).send({message: err.message});
    }
}

async function enquiryAcknowledgement(req, res){
    try{
        const { id, response } = req.query;
        const adminid = req.userid;

        const enquiry = await enquirySchema.findOne({ _id:`${id}`, dealerid: `${adminid}`});
        const { enquirerid, carid } = enquiry;

        const carName = await carSchema.findOne({
            _id:`${carid}`
        })
        .select({
            carname:1,
            _id:0
        });

        const dealerName = await userSchema.findOne({
            _id: `${adminid}`
        })
        .select({
            shopdetails:1,
            _id:0
        });

        const customerMail = await userSchema.findOne({
            _id: `${enquirerid}`
        })
        .select({
            emailid:1,
            _id:0
        });
        console.log('customerMail=>',customerMail);

        if(customerMail){
            if(response === "accepted"){
                const message = {
                    from: "no-reply@cardealer.com",
                    to: `${customerMail.emailid}`,
                    subject: 'Your Enquiry is Accepted',
                    text: `Your enquiry for the car ${carName.carname} is accepted at ${dealerName.shopdetails.shopname}`,
                    // html: "<p><img style='width:150px; height:100px;' src='https://res.cloudinary.com/djfbnzspr/image/upload/v1695501177/WhatsApp_Image_2023-09-03_at_2.44.50_PM_uqcuas.jpg'/></p>"
                };

                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.log('Error occurred. ' + err.message);
                        return process.exit(1);
                    }
            
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                });
                res.status(200).send(`Accepted mail sent to ${customerMail.emailid}`);
            }
            else if(response === "rejected"){
                const message = {
                    from: "no-reply@cardealer.com",
                    to: `${customerMail.emailid}`,
                    subject: 'Your Enquiry is Rejected',
                    text: `Your enquiry for the car ${carName.carname} is rejected at ${dealerName.shopdetails.shopname}`,
                    // html: "<p><img style='width:150px; height:100px;' src='https://res.cloudinary.com/djfbnzspr/image/upload/v1695501177/WhatsApp_Image_2023-09-03_at_2.44.50_PM_uqcuas.jpg'/></p>"
                };

                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.log('Error occurred. ' + err.message);
                        return process.exit(1);
                    }
            
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                });
                res.status(200).send(`Rejected mail sent to ${customerMail.emailid}`);
            
            }
            else{
                throw new Error("Invalid Response")
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(422).send({message: err.message});
    }
}

async function deleteEnquiry(req, res){
    try{
        const { id, response } = req.query;
        const adminid = req.userid;
        if(response === "delete"){
            const result = await enquirySchema.findOneAndRemove({
                _id: id,
                dealerid: adminid
            });
            res.status(200).json({message: "Successfully deleted the enquiry"});
        }
        else{
            throw new Error("Something went wrong. Enquiry is not deleted");
        }
    }
    catch(err){
        console.log(err);
        res.status(422).json({message: err.message});
    }
}

module.exports = {
    createEnquiry,
    getEnquiry,
    getParticularEnquiry,
    enquiryAcknowledgement,
    deleteEnquiry

}