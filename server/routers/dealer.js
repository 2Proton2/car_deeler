const express = require('express');
const router = express.Router();
const dealerController = require('../controllers/dealerController');

router.get('all-dealer', middleware('this type of req only customer should able to do. So check the type and then show all dealers list'), dealerController.getAllDealer);

module.exports = router;