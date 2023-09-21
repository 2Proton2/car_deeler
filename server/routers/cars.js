const express = require('express');
const router =  express.Router();
const carController = require('../controllers/carController');
const _auth = require('../middlewares/auth');

const middleware = async function(req, res, next){
    try{
        console.log('I am the middleware which will authenticate whether the user is logged in or not for executing the callback');
        return next(); // Correct way to call next
    }
    catch(err){
        console.log(err);
    }
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
 * I have selected new @particular or @particular car
 * I just want to see the car details. I am not applying for the further enqury
 * More Details button
 */
router.get('/:name', carController.getCarParticular);

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
router.get('/user-inventory', _auth.authentication,/*middleware('check customer/admin, then show the number of cars'),*/ carController.getMyInventoryCarList);

/**
 * @update an inventory item.
 * clicks on @update button after editing the items
 */
router.patch('/update', _auth.authentication,/*middle('check customer/admin, then do the entry in table depending on the schema for admin/customer'),*/ carController.updateACar);

module.exports = router;