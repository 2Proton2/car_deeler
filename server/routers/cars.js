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
router.post('/old/:name', middleware, carController.postOldParticular);

/**
 * registering for @new car / applying for @new car
 * enquiring for selected @new car
 * Clicking on apply button
 */
router.post('/new/:name', middleware, carController.postNewParticular);

module.exports = router;