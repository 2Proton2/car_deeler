const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
dotenv.config({ path: './config.env' });
require('./config/database');

/**
 * allowing the frontend http request
 */
const corsOptions = {
    origin: 'http://localhost:5173', // Update with your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};


/**
 * I woould like to communicate with server and client in @json format
 * Apply the @cors
 */
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

/**
 * My endpoints of the website  @routes
 */
app.use('/cars', require('./routers/carsRoute'));
app.use('/user', require('./routers/userRoute'));
app.use('/admin', require('./routers/dealerRoute'));

/**
 * Hey buddy!! I am listening @port 
 */
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
})