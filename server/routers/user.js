const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const middleware = async function(req, res, next){
    try{
        console.log('user');
        return next(); // Correct way to call next
    }
    catch(err){
        console.log(err);
    }
}

/**
 * let me join @create_acc
 * clicking on create an account
 */
router.post('/signup', /*middleware('decide who is it admin or customer .. based on that schema should be followed'),*/ userController.signingUp);

/**
 * profile need to be @updated
 * clicking on update button when user is done with his changes
 */
router.patch('/udpate', /*middleware('check the whether users is genuine, entry must be updated based on login type admin/customers'),*/ userController.updateUserDetails);

/**
 * @login
 * clicking on login button
 */
router.post('/login', /*middleware('check the whether users is genuine, give the response 200 if email/password matched'),*/ userController.logUserIn)

/**
 * @forgot_password
 */
router.post('/forgot-password',/* middleware('will take the email and send OTP on email for verification and reset password link will be provided'),*/ userController.forgotPassword)

/**
 * to show @profile details
 * when user clicks on profile button
 */
router.get('/profile-details', /*middleware('based on login type, bring the details'),*/ userController.getUserDetails);

module.exports = router;