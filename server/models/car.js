require('../config/database');
const mongoose = require('mongoose');
const validator = require('validator');

const carSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    carname: {
        type: String,
        required: true
    },
	variant: {
        type: String,
        required: true
    },
	manufacturingyear: {
        type: Date,
        required: true
    },
	maker: {
        type: String,
        required: true
    },
	fuel: {
        type: String,
        required: true
    },
	airbags: {
        type: Number,
        required: true
    },
	noofcylinders: {
        type: Number,
        required: true
    },
	bodytype: {
        type: String,
        required: true
    },
	groundclearance: {
        type: String,
        required: true
    },
	description: {
        type: String,
        required: true
    },
	newcardetails : {
		mileage:{
            type: String
        },
		dimensions:{
            type: String
        },
		price:{
            type: String
        },
		transmission:{
            type: String
        },
		engine:{
            type: String
        },
		power:{
            type: String
        },
        torque:{
            type: String
        }
	},
	customercardetails : {
		owner: {
            type: String
        },
		purchasedate: {
            type: Date
        },
		expectedprice: {
            type: String
        },
		accidentcase: {
            type: Boolean
        },
		paperavailability: {
            type: Boolean
        },
	},
	photos : {
        type : Array,
        required: true
    }
})

const car = mongoose.model('car', carSchema);

module.exports = car;