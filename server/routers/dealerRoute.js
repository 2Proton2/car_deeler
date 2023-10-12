const express = require('express');
const router = express.Router();
const dealerController = require('../controllers/dealerController');
const _auth = require("../middlewares/auth");

/**
 * Only customer will able to do such kind of req
 * this will be requested when customer clicks on @apply button shown on his inventory list
 */
router.get('/all-admin', _auth.authentication, dealerController.getAllDealer);

module.exports = router;