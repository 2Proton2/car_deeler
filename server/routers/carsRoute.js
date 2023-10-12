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
 * user/admin wants to @add their car into their inventory list
 * clicks on add button
 */
router.post('/add-car', _auth.authentication, carController.addCar);

/**
 * Bring me my @inventory_list
 * This will show all the cars which are being added into the inventory list
 */
router.get('/user-inventory',  _auth.authentication, carController.getMyInventoryCarList);

/**
 * @update an inventory item.
 * clicks on @update button after editing the items
 */
router.patch('/update', _auth.authentication, carController.updateACar);





/*-------------------- ENQUIRED ARE DEPENDENT ON CARS SCHEME AND ROUTES HENCE ARE BEING PLACED HERE --------------------*/
/**
 * creates enquiry
 * clicking on apply button of enquiry form
 */
router.post('/create-enquiry', _auth.authentication, enquiryController.createEnquiry);

/**
 * get the enquiry
 */
router.get('/get-enquiry', _auth.authentication, enquiryController.getEnquiry);

/**
 * get particular enquiry
 */
router.get('/get-particular-enquiry', _auth.authentication, enquiryController.getParticularEnquiry);

/**
 * deletes the enquiry for @X (close) and @Decline buttons while for @accept it will keep in the DB.
 */
router.post('/ack-enquiry', _auth.authentication, enquiryController.enquiryAcknowledgement);

router.post('/delete-particular-enquiry', _auth.authentication, enquiryController.deleteEnquiry);

module.exports = router;