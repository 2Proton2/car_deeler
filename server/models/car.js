require('../config/database');
const mongoose = require('mongoose');
const validator = require('validator');

const carSchema = mongoose.Schema({
    type: {
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
        type: Number,
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
        type: Number,
        required: true
    },
	description: {
        type: String,
        required: true
    },
	newcardetails : {
		mileage:{
            type: Number,
            required: true
        },
		dimensions:{
            type: String,
            required: true
        },
		price:{
            type: Number,
            required: true
        },
		transmission:{
            type: String,
            required: true
        },
		engine:{
            type: String,
            required: true
        },
		power:{
            type: Number,
            required: true
        }
	},
	customercardetails : {
		owner: {
            type: String,
            required: true
        },
		purchasedate: {
            type: Date,
            required: true
        },
		expectedprice: {
            type: Number,
            required: true
        },
		accidentcase: {
            type: Boolean,
            required: true
        },
		paperavailability: {
            type: Boolean,
            required: true
        },
	},
	photos : {
        type : Array,
        validate: {
            validator : (value) => {
                if(!(value.length === 4)){
                    throw new Error(`%%% All required images are uploaded %%%`);
                }
            },
            message: `Please upload all the required images`
        }
    }
})

const car = mongoose.model('car', carSchema);

module.exports = car;