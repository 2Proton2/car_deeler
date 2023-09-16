const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');

/**
 * creates enquiry
 * clicking on apply button of enquiry form
 */
router.post('/create-enquiry', middleware('check which enquiry is it for new or old car and is he selling or buying the car ? : based on that format will be decided ... also email should be sent on successful enquiry to user and a notification should receive to dealer'), enquiryController.createEnquiry);

/**
 * get the enquiry
 */
router.get('/get-enquiry', middleware('bring down all the enquiries for the respective logged in dealer'), enquiryController.getEnquiry);

/**
 * get particular enquiry
 */
router.get('/get-particular-enquiry', middleware('bring the details for clicked enquiry'), enquiryController.getParticularEnquiry);

/**
 * deletes the enquiry for @X (close) and @Decline buttons while for @accept it will keep in the DB.
 */
router.post('ack-enquiry', middleware('check the user is admin or not, for customer applied for buying(if declined is clicked then rejection email should be triggerred to the respective client and enquiry should be deleted while if "x(close)" symbol is clicked then only enquiry must be deleted no email should be triggered while if accept is clicked then email should be triggered for the respective customer but enquiry will not be deleted unless close button is not clicked), for customer applied for selling(clicked on dealdone then email should be triggered to both deal and customer for reference and if send is clicked then only customer side email should be triggered as dealer wants to negotiate and if close button is clicked then enquiry should be deleted from the table)'), enquiryController.enquiryAcknowledgement);

module.exports = router;