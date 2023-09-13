const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('./config/database');


/**
 * My endpoints of the website  @routes
 */
app.use('/cars', require('./routers/cars'));
app.use('/user', require('./routers/user'));

/**
 * I woould like to communicate with server and client in @json format
 */
app.use(express.json());

/**
 * Hey buddy!! I am listening @port 
 */
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
})