const express = require('express');
const router =  express.Router();
const carController = require('../controllers/carController');
const _auth = require('../middlewares/auth');
const enquiryController = require('../controllers/enquiryController');


/**
 * navigate me to @new cars
 */
router.get('/new', carController.getNew);

/**
 * navigate me to @old cars
 */
router.get('/old', carController.getOld);

/**
 * I have selected new @particular or @particular car
 * I just want to see the car details. I am not applying for the further enqury
 * More Details button
 */
router.get('/particular/:name', carController.getCarParticular);

/**
 * registering for @old car / applying for @old car
 * enquiring for selected @old car
 * Clicking on apply button 
 */
router.get('/apply/:name', _auth.authentication, carController.applyForCar);

/**
 * user/dealer wants to @add their car into their inventory list
 * clicks on add button
 */
router.post('/add-car', _auth.authentication, /*middleware('first check who wants to add customer/admin ... based on that DB schema is decided'),*/ carController.addCar);

/**
 * Bring me my @inventory_list
 * This will show all the cars which are being added into the inventory list
 */
router.get('/user-inventory',  _auth.authentication, carController.getMyInventoryCarList);

/**
 * @update an inventory item.
 * clicks on @update button after editing the items
 */
router.patch('/update', _auth.authentication,/*middle('check customer/admin, then do the entry in table depending on the schema for admin/customer'),*/ carController.updateACar);





/*-------------------- ENQUIRED ARE DEPENDENT ON CARS SCHEME AND ROUTES HENCE ARE BEING PLACED HERE --------------------*/
/**
 * creates enquiry
 * clicking on apply button of enquiry form
 */
router.post('/create-enquiry', /*middleware('check which enquiry is it for new or old car and is he selling or buying the car ? : based on that format will be decided ... also email should be sent on successful enquiry to user and a notification should receive to dealer'),*/ enquiryController.createEnquiry);

/**
 * get the enquiry
 */
router.get('/get-enquiry', /*middleware('bring down all the enquiries for the respective logged in dealer'),*/ enquiryController.getEnquiry);

/**
 * get particular enquiry
 */
router.get('/get-particular-enquiry', /*middleware('bring the details for clicked enquiry'),*/ enquiryController.getParticularEnquiry);

/**
 * deletes the enquiry for @X (close) and @Decline buttons while for @accept it will keep in the DB.
 */
router.post('ack-enquiry', /*middleware('check the user is admin or not, for customer applied for buying(if declined is clicked then rejection email should be triggerred to the respective client and enquiry should be deleted while if "x(close)" symbol is clicked then only enquiry must be deleted no email should be triggered while if accept is clicked then email should be triggered for the respective customer but enquiry will not be deleted unless close button is not clicked), for customer applied for selling(clicked on dealdone then email should be triggered to both deal and customer for reference and if send is clicked then only customer side email should be triggered as dealer wants to negotiate and if close button is clicked then enquiry should be deleted from the table)'),*/ enquiryController.enquiryAcknowledgement);


module.exports = router;