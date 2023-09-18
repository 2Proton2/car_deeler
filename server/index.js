const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
dotenv.config({ path: './config.env' });
require('./config/database');

/**
 * I woould like to communicate with server and client in @json format
 */
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

/**
 * My endpoints of the website  @routes
 */
app.use('/cars', require('./routers/cars'));
app.use('/user', require('./routers/user'));
app.use('/enquiry', require('./routers/enquiry'));
app.use('/dealer', require('./routers/dealer'));

/**
 * Hey buddy!! I am listening @port 
 */
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
})