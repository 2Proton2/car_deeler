const mongoose = require('mongoose');
const dbName = `cardealer`;
const dBURL = process.env.DATABASEURL

/**
 * shaking hands with mongoDB
 */
mongoose.connect(`${dBURL}${dbName}`)
    .then(()=> console.log(`Handshake with database at "${dBURL}${dbName}" is done successfully`))
    .catch((err) => {
        const error = new Error(err);
        throw error;
    });