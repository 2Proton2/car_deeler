const express = require('express');
const router =  express.Router();
const carController = require('../controllers/carController');

const middleware = async function(req, res, next){
    console.log('I am the middleware which will authenticate where the user is logged in or not for executing the callback');
    next();
}

/**
 * navigate me to @new cars
 */
router.get('/new', carController.getNew);

/**
 * navigate me to @old cars
 */
router.get('/old', carController.getOld);

/**
 * I have selected new @particular car
 * I just want to see the car details. I am not applying for the further enqury
 * More Details button
 */
router.get('/new/:name', carController.getNewParticular);

/**
 * I have selected old @particular car
 * I just want to see the car details. I am not applying for the further enqury
 * More Details button
 */
router.get('/old/:name', carController.getOldParticular);

/**
 * registering for @old car / applying for @old car
 * enquiring for selected @old car
 * Clicking on apply button 
 */
router.get('/old/:name/apply', middleware('check whether the user is signned or not ..if yes bring the enquirer name, selectedcar, registereddata'), carController.applyForOldCar);

/**
 * registering for @new car / applying for @new car
 * enquiring for selected @new car
 * Clicking on apply button
 */
router.get('/new/:name/apply', middleware('check whether the user is signned or not ..if yes bring the enquirer name, selectedcar, registereddata'), carController.applyForNewCar);

/**
 * user/dealer wants to @add their car into their inventory list
 * clicks on add button
 */
router.post('/add-car', middleware('first check who wants to add customer/admin ... based on that DB schema is decided'), carController.addCar);

/**
 * Bring me my @inventory_list
 * This will show all the cars which are being added into the inventory list
 */
router.get('/user-inventory', middleware('check customer/admin, then show the number of cars'), carController.getMyInventoryCarList);

/**
 * @update an inventory item.
 * clicks on @update button after editing the items
 */
router.patch('',middle('check customer/admin, then do the entry in table depending on the schema for admin/customer'), carController.updateACar);

module.exports = router;