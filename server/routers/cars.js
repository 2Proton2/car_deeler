const express = require('express');
const router =  express.Router();

const middleware = async function(req, res, next){
    console.log('I am the middleware which will authenticate where the user is logged in or not for executing the callback');
    next();
}

/**
 * navigate me to @new cars
 */
router.get('/new', async (req, res) => {
    res.send({message : 'hey I am NEW called'});
});

/**
 * navigate me to @old cars
 */
router.get('/old', async (req, res) => {
    res.send({message : 'hey I am OLD called'});
});

/**
 * I have selected new @particular car
 * I just want to see the car details. I am not applying for the further enqury
 * More Details button
 */
router.get('/new/:name', async (req, res) => {
    console.log('backend : hey I am a NEW PARTICULAR car', req.params.name);
    res.send({message : 'hey I am a NEW PARTICULAR car'})
})

/**
 * I have selected old @particular car
 * I just want to see the car details. I am not applying for the further enqury
 * More Details button
 */
router.get('/old/:name', async (req, res) => {
    console.log('backend : hey I am a OLD PARTICULAR car', req.params.name);
    res.send({message : 'hey I am a OLD PARTICULAR car'})
})

/**
 * registering for @old car / applying for @old car
 * enquiring for selected @old car
 * Clicking on apply button 
 */
router.post('/old/:name', middleware, async (req, res) => {
    console.log('backend : hey I am a OLD PARTICULAR car', req.params.name);
    res.send({message : 'hey I am a OLD PARTICULAR car'})
})

/**
 * registering for @new car / applying for @new car
 * enquiring for selected @new car
 * Clicking on apply button
 */
router.get('/new/:name', middleware, async (req, res) => {
    console.log('backend : hey I am a NEW PARTICULAR car', req.params.name);
    res.send({message : 'hey I am a NEW PARTICULAR car'})
})

module.exports = router;