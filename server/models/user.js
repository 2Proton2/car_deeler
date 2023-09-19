require('../config/database');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
	firstname: {
        type: String,
        required: true
    },
	middlename: {
        type: String,
        required: true
    },
	lastname: {
        type: String,
        required: true
    },
	dob: {
        type: Date,
        required: true,
        validate:{
            validator: (dob) => {
                return dob <= new Date();
            },
            message: 'Invalid date of birth'
        }
    },
	emailid: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "%%% Email ID already exist. Please, enter an unique email id %%%"],
        validate: {
            validator: function (value) {
                // Use a regular expression 
                const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!(mailRegex.test(value))){
                    throw new Error("%%% Invalid email %%%");
                }
            },
            message: 'Invalid email address',
        },
        message: `Enter a valid email address`
    },
	phoneno: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => {
                const indianPhNoRegexCase = /^[6-9]\d{9}$/;
                if(!(indianPhNoRegexCase.test(value))){
                    throw new Error("%%% Enter a valid Mobile Number %%%")
                }
            },
            message: `Enter a valid Mobile Number`
        }
    },
	shopdetails : {
		shopname: {
            type: String
        },
		gstno: {
            type: String,
            validate: {
                validator : (value) => {
                    const gstRegexMatchCase = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
                    if(!(gstRegexMatchCase.test(value))){
                        throw new Error(`%%% Invalid GST Input %%%`);
                    }
                },
                message: `Invalid GST Input`
            }
        }
	},
	zipcode: {
        type: String,
        required: true
    },
	address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (pass) => {
                const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
                if(!(hasSpecialChar.test(pass) && pass.length >= 8)){
                    throw new Error(`%%% Password requirements are not matched %%%`);
                }
            },
            message: `Password requirements are not fullfilled. Minimum 8 characters long password is needed and atleast one special character`
        }
    },
	photo : {
        type: Array,
        required: true,
    }
})

/**
 * Password @hash logic
 */
userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const user = mongoose.model('user', userSchema);
module.exports = user;